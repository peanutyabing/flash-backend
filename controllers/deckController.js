const jwt = require("jsonwebtoken");

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
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;
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
}

module.exports = DeckController;
