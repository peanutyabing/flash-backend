const getUserIdFromToken = require("../utils/getUserIdFromToken.js");

class CardController {
  constructor(model) {
    this.model = model;
  }

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
}

module.exports = CardController;
