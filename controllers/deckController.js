const getUserIdFromToken = require("../utils/getUserIdFromToken.js");

class DeckController {
  constructor(
    model,
    userModel,
    languageModel,
    difficultyLevelModel,
    subcategoryModel,
    cardModel
  ) {
    this.model = model;
    this.userModel = userModel;
    this.languageModel = languageModel;
    this.difficultyLevelModel = difficultyLevelModel;
    this.subcategoryModel = subcategoryModel;
    this.cardModel = cardModel;
  }

  getUserDecks = async (req, res) => {
    const userId = getUserIdFromToken(req);
    try {
      const currentUserDecks = await this.model.findAll({
        where: { userId },
        order: [["updatedAt", "DESC"]],
        include: [
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
          { model: this.cardModel, attributes: ["front"] },
        ],
      });
      return res.json(currentUserDecks);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  addNewDeck = async (req, res) => {
    const userId = getUserIdFromToken(req);
    try {
      const newDeck = await this.model.create({
        ...req.body,
        userId,
        nLikes: 0,
        nForks: 0,
      });
      res.json(newDeck);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = DeckController;
