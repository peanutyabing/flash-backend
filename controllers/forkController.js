const getUserIdFromToken = require("../utils/getUserIdFromToken.js");

class ForkController {
  constructor(sequelize, model, userModel, deckModel) {
    this.sequelize = sequelize;
    this.model = model;
    this.userModel = userModel;
    this.deckModel = deckModel;
  }

  getForksFromUser = async (req, res) => {
    const { userId } = req.params;
    try {
      const forksFromUser = await this.model.findAll({
        where: { forkedFromUserId: userId },
        include: {
          model: this.userModel,
          attributes: ["username"],
          as: "forkedToUser",
        },
      });
      return res.json(forksFromUser);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  getForksToUser = async (req, res) => {
    const { userId } = req.params;
    try {
      const forksToUser = await this.model.findAll({
        where: { forkedToUserId: userId },
        include: {
          model: this.userModel,
          attributes: ["username"],
          as: "forkedFromUser",
        },
      });
      return res.json(forksToUser);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  getForksFromDeck = async (req, res) => {
    const { deckId } = req.params;
    try {
      const forksFromDeck = await this.model.findAll({
        where: { forkedFromDeckId: deckId },
        include: {
          model: this.userModel,
          attributes: ["username"],
          as: "forkedToUser",
        },
      });
      return res.json(forksFromDeck);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  addFork = async (req, res) => {
    const forkedToUserId = getUserIdFromToken(req);
    try {
      const newFork = this.model.create({ ...req.body, forkedToUserId });
      return res.json(newFork);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  updateNForks = async (req, res) => {
    const { deckId } = req.params;
    let updatedNForks;
    try {
      const nForksRes = await this.model.findOne({
        where: { forkedFromDeckId: deckId },
        attributes: [
          [
            this.sequelize.fn(
              "COUNT",
              this.sequelize.col("forked_from_deck_id")
            ),
            "nForks",
          ],
        ],
        group: ["fork.forked_from_deck_id"],
      });
      updatedNForks = nForksRes.toJSON().nForks;
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }

    try {
      const updatedDeckForksCount = await this.deckModel.update(
        { nForks: updatedNForks, updatedAt: new Date() },
        { where: { id: deckId }, returning: true, plain: true }
      );
      res.json(updatedDeckForksCount);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = ForkController;
