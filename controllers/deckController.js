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

  getOneDeck = async (req, res) => {
    const userId = getUserIdFromToken(req);
    const { deckId } = req.params;
    try {
      const foundDeck = await this.model.findOne({
        where: { userId, id: deckId },
        include: [
          {
            model: this.languageModel,
            attributes: ["id", "name", "code"],
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
        ],
      });
      return res.json(foundDeck);
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
      return res.json(newDeck);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  updateDeck = async (req, res) => {
    const userId = getUserIdFromToken(req);
    const { deckId } = req.params;
    try {
      const updatedDeck = await this.model.update(
        { ...req.body, updatedAt: new Date() },
        { where: { userId, id: deckId }, returning: true, plain: true }
      );
      return res.json(updatedDeck);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = DeckController;
