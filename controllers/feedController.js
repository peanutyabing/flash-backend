const getUserIdFromToken = require("../utils/getUserIdFromToken.js");
const { Op } = require("sequelize");

class FeedController {
  constructor(
    deckModel,
    userModel,
    languageModel,
    difficultyLevelModel,
    subcategoryModel,
    cardModel,
    interestModel
  ) {
    this.deckModel = deckModel;
    this.userModel = userModel;
    this.languageModel = languageModel;
    this.difficultyLevelModel = difficultyLevelModel;
    this.subcategoryModel = subcategoryModel;
    this.cardModel = cardModel;
    this.interestModel = interestModel;
  }

  getAllDecks = async (req, res) => {
    try {
      const allDecks = await this.deckModel.findAll({
        where: { nonPublic: false },
        order: [["updatedAt", "DESC"]],
        include: [
          {
            model: this.userModel,
            attributes: ["username", "imageUrl"],
            as: "user",
          },
          {
            model: this.userModel,
            attributes: ["username"],
            as: "author",
          },
          {
            model: this.languageModel,
            attributes: ["name"],
          },
          {
            model: this.difficultyLevelModel,
            attributes: ["id", "name"],
          },
          {
            model: this.subcategoryModel,
            attributes: ["id", "name"],
            through: {
              attributes: [],
            },
          },
          { model: this.cardModel, attributes: ["front", "back"] },
        ],
      });
      return res.json(allDecks);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  getDecksOfInterest = async (req, res) => {
    const userId = getUserIdFromToken(req);
    const userInterests = await this.getUserInterests(userId);
    // console.log("interests >>>>>>>>>>>>", userInterests);
    // interests >>>>>>>>>>>> [ 31, 59, 19, 10, 15 ]

    try {
      const decksOfInterest = await this.deckModel.findAll({
        where: {
          nonPublic: false,
          languageId: { [Op.in]: userInterests },
          userId: { [Op.not]: userId },
        },
        order: [["languageId", "DESC"]],
        include: [
          {
            model: this.userModel,
            attributes: ["username", "imageUrl"],
            as: "user",
          },
          {
            model: this.userModel,
            attributes: ["username"],
            as: "author",
          },
          {
            model: this.languageModel,
            attributes: ["name"],
          },
          {
            model: this.difficultyLevelModel,
            attributes: ["id", "name"],
          },
          {
            model: this.subcategoryModel,
            attributes: ["id", "name"],
            through: {
              attributes: [],
            },
          },
          { model: this.cardModel, attributes: ["front", "back"] },
        ],
      });
      return res.json(decksOfInterest);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  getDecksOutsideOfInterests = async (req, res) => {
    const userId = getUserIdFromToken(req);
    const userInterests = await this.getUserInterests(userId);

    try {
      const decksOutsideOfInterests = await this.deckModel.findAll({
        where: {
          nonPublic: false,
          languageId: { [Op.notIn]: userInterests },
          userId: { [Op.not]: userId },
        },
        order: [["languageId", "DESC"]],
        include: [
          {
            model: this.userModel,
            attributes: ["username", "imageUrl"],
            as: "user",
          },
          {
            model: this.userModel,
            attributes: ["username"],
            as: "author",
          },
          {
            model: this.languageModel,
            attributes: ["name"],
          },
          {
            model: this.difficultyLevelModel,
            attributes: ["id", "name"],
          },
          {
            model: this.subcategoryModel,
            attributes: ["id", "name"],
            through: {
              attributes: [],
            },
          },
          { model: this.cardModel, attributes: ["front", "back"] },
        ],
      });
      return res.json(decksOutsideOfInterests);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  getUserInterests = async (userId) => {
    try {
      const currentUser = await this.userModel.findOne({
        where: { id: userId },
      });
      const interests = await currentUser.getInterests({
        attributes: ["languageId"],
        order: [["fluency"]],
      });
      return interests.map((interest) => interest.languageId);
    } catch (err) {
      return err;
    }
  };
}

module.exports = FeedController;
