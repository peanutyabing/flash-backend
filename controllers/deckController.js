const jwt = require("jsonwebtoken");

class DeckController {
  constructor(
    model,
    userModel,
    languageModel,
    difficultyLevelModel,
    subcategoryModel
    // likeModel,
    // forkModel
  ) {
    this.model = model;
    this.userModel = userModel;
    this.languageModel = languageModel;
    this.difficultyLevelModel = difficultyLevelModel;
    this.subcategoryModel = subcategoryModel;
    // this.likeModel = likeModel;
    // this.forkModel = forkModel;
  }

  getUserDecks = async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;
    try {
      const currentUserDecks = await this.model.findAll({
        where: { userId },
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
            attributes: ["name"],
          },
          {
            model: this.subcategoryModel,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        ],
      });
      return res.json(currentUserDecks);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = DeckController;
