const getUserIdFromToken = require("../utils/getUserIdFromToken.js");
const { Op } = require("sequelize");
const moment = require("moment");

class XpController {
  constructor(xpTransactionModel, xpActivityModel, userModel) {
    this.xpTransactionModel = xpTransactionModel;
    this.xpActivityModel = xpActivityModel;
    this.userModel = userModel;
  }

  getXpTransactionHistory = async (req, res) => {
    const userId = getUserIdFromToken(req);
    try {
      const xpTransactionHistory = await this.xpTransactionModel.findAll({
        where: { userId },
        order: [["updatedAt", "DESC"]],
        include: {
          model: this.xpActivityModel,
          attributes: ["name"],
        },
      });
      return res.json(xpTransactionHistory);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  addXpTransaction = async (req, res) => {
    const userId = getUserIdFromToken(req);
    const { xpActivityId, numOfUnits } = req.body;
    const validated = await this.isXpActivityValid(userId, xpActivityId);
    if (!validated) {
      return res.send(
        "Not adding any more XPs as the user has already claimed them."
      );
    }

    let xpGained = 0;
    try {
      const xpActivity = await this.xpActivityModel.findOne({
        where: { id: xpActivityId },
      });
      if (xpActivity.perUnit) {
        xpGained = numOfUnits * xpActivity.points;
      } else {
        xpGained = xpActivity.points;
      }
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }

    try {
      const newTransaction = await this.xpTransactionModel.create({
        userId,
        xpActivityId,
        xpGained,
        weekNumber: moment(new Date()).week(),
        year: moment(new Date()).year(),
      });
      this.incrementUserXp(userId, xpGained);
      return res.json(newTransaction);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  incrementUserXp = async (userId, xpGained) => {
    try {
      const foundUser = await this.userModel.findByPk(userId);
      const newXp = foundUser.xp + xpGained;
      await foundUser.update(
        {
          xp: newXp,
          updatedAt: new Date(),
        },
        { returning: true, plain: true }
      );
    } catch (err) {
      return err;
    }
  };

  isXpActivityValid = async (userId, xpActivityId) => {
    let foundTransactions;

    if (xpActivityId === 1) {
      // Xp for creating new account is awarded only once per user
      foundTransactions = await this.xpTransactionModel.findAll({
        where: { userId, xpActivityId },
      });
    } else if (xpActivityId === 2) {
      // Xp for daily check-in is awarded only once per user per day
      let startOfToday = new Date(new Date().toLocaleDateString());
      let endOfToday = new Date(
        new Date().toLocaleDateString() + ", 11:59:59:999 PM"
      );
      foundTransactions = await this.xpTransactionModel.findAll({
        where: {
          userId,
          xpActivityId: { [Op.or]: [1, 2] },
          createdAt: { [Op.between]: [startOfToday, endOfToday] },
        },
      });
    } else {
      return true; // Other activity types such as practice and challenge do not need validation
    }
    if (foundTransactions.length) {
      console.log("returning false");
      return false;
    } else {
      console.log("returning true");
      return true;
    }
  };
}

module.exports = XpController;
