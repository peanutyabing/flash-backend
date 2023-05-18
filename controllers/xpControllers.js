const getUserIdFromToken = require("../utils/getUserIdFromToken.js");
const { Op } = require("sequelize");
const moment = require("moment");

class XpController {
  constructor(sequelize, xpTransactionModel, xpActivityModel, userModel) {
    this.sequelize = sequelize;
    this.xpTransactionModel = xpTransactionModel;
    this.xpActivityModel = xpActivityModel;
    this.userModel = userModel;
  }

  getAllUsersAllTimeXpTransactionHistory = async (req, res) => {
    try {
      const allTimeTransactions = await this.xpTransactionModel.findAll({
        attributes: [
          "userId",
          [
            this.sequelize.fn("SUM", this.sequelize.col("xp_gained")),
            "xpTotal",
          ],
        ],
        include: {
          model: this.userModel,
          attributes: ["username", "imageUrl"],
        },
        group: ["userId", "user.id"],
        order: [["xpTotal", "DESC"]],
      });
      return res.json(allTimeTransactions);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  getAllUsersThisWeekXpTransactionHistory = async (req, res) => {
    const thisYear = moment(new Date()).year();
    const thisWeek = moment(new Date()).week();
    try {
      const thisWeeksTransactions = await this.xpTransactionModel.findAll({
        where: { weekNumber: thisWeek, year: thisYear },
        attributes: [
          "userId",
          [
            this.sequelize.fn("SUM", this.sequelize.col("xp_gained")),
            "xpTotal",
          ],
        ],
        include: {
          model: this.userModel,
          attributes: ["username", "imageUrl"],
        },
        group: ["userId", "user.id"],
        order: [["xpTotal", "DESC"]],
      });
      return res.json(thisWeeksTransactions);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  getUserXpTransactionHistory = async (req, res) => {
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
    let { userId, xpActivityId, numOfUnits } = req.body;
    if (!userId) {
      userId = getUserIdFromToken(req);
    }
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
