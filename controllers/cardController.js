const getUserIdFromToken = require("../utils/getUserIdFromToken.js");

class CardController {
  constructor(model) {
    this.model = model;
  }

  getCardsOfDeck = async (req, res) => {
    const userId = getUserIdFromToken(req);
    const { deckId } = req.params;
    try {
      const foundCards = await this.model.findAll({
        where: { userId, deckId },
      });
      return res.json(foundCards);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  getOneCard = async (req, res) => {
    const userId = getUserIdFromToken(req);
    const { deckId, cardId } = req.params;
    try {
      const foundCard = await this.model.findOne({
        where: { userId, deckId, id: cardId },
      });
      return res.json(foundCard);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  addNewCard = async (req, res) => {
    const userId = getUserIdFromToken(req);
    try {
      const newCard = await this.model.create({
        ...req.body, //deckId, front, back
        userId,
        numberOfTimesSeen: 0,
        numberOfTimesCorrect: 0,
      });
      res.json(newCard);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  updateCard = async (req, res) => {
    const userId = getUserIdFromToken(req);
    const { cardId } = req.params;
    try {
      const updatedCard = await this.model.update(
        {
          ...req.body,
          updatedAt: new Date(),
        },
        { where: { userId, id: cardId }, returning: true, plain: true }
      );
      res.json(updatedCard);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  deleteCard = async (req, res) => {
    const userId = getUserIdFromToken(req);
    const { cardId } = req.params;
    try {
      const cardToDelete = await this.model.findOne({
        where: { userId, id: cardId },
      });
      await cardToDelete.destroy();
      return res.json(cardToDelete);
    } catch (err) {
      return res.status(400).json({
        error: true,
        msg: "The card you are trying to delete is not found.",
      });
    }
  };
}

module.exports = CardController;
