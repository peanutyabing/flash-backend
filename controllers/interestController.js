const getUserIdFromToken = require("../utils/getUserIdFromToken.js");

class InterestController {
  constructor(model, fluencyLevelModel, languageModel) {
    this.model = model;
    this.fluencyLevelModel = fluencyLevelModel;
    this.languageModel = languageModel;
  }

  getAllInterests = async (req, res) => {
    try {
      const interests = await this.model.findAll({
        include: [
          { model: this.fluencyLevelModel, attributes: ["name"] },
          { model: this.languageModel, attributes: ["name"] },
        ],
      });
      return res.json(interests);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  getUserInterests = async (req, res) => {
    let { userId } = req.params;
    try {
      const userInterests = await this.model.findAll({
        where: { userId },
        attributes: ["id", "userId", "languageId", "fluencyLevelId"],
        order: [["fluencyLevelId"]],
        include: [
          { model: this.fluencyLevelModel, attributes: ["name"] },
          { model: this.languageModel, attributes: ["name"] },
        ],
      });
      return res.json(userInterests);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  addOneInterest = async (req, res) => {
    const userId = getUserIdFromToken(req);
    try {
      const newInterest = await this.model.create({ ...req.body, userId });
      return res.json(newInterest);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  updateInterest = async (req, res) => {
    const { interestId } = req.params;
    const userId = getUserIdFromToken(req);
    console.log("interest", interestId);
    console.log("user", userId);
    console.log(req.body);
    try {
      const updatedInterest = await this.model.update(
        { ...req.body, updatedAt: new Date() },
        { where: { userId, id: interestId }, returning: true, plain: true }
      );
      return res.json(updatedInterest);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  deleteInterest = async (req, res) => {
    const { interestId } = req.params;
    const userId = getUserIdFromToken(req);
    try {
      const interestToDelete = await this.model.findOne({
        where: { userId, id: interestId },
      });
      await interestToDelete.destroy();
      return res.json(interestToDelete);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = InterestController;
