const axios = require("axios");
const getUserIdFromToken = require("../utils/getUserIdFromToken.js");

const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
  headers: {
    Authorization: "Bearer " + apiKey,
  },
});

const params = {
  prompt: "",
  model: "text-davinci-003",
  temperature: 0,
  max_tokens: 250,
};

class AiController {
  constructor(sequelize, deckModel, cardModel) {
    this.sequelize = sequelize;
    this.deckModel = deckModel;
    this.cardModel = cardModel;
  }

  checkUsageLimit = async (req, res) => {
    const userId = getUserIdFromToken(req);
    const withinLimit = await this.IsUsageWithinLimit(userId);
    if (!withinLimit) {
      return res.json({
        success: false,
        msg: "You have exceeded the number of AI-generated decks available.",
      });
    } else {
      return res.json({
        success: true,
      });
    }
  };

  createDeckFromUserSpecification = async (req, res) => {
    const userId = getUserIdFromToken(req);
    const withinLimit = await this.IsUsageWithinLimit(userId);
    if (!withinLimit) {
      return;
    }
    const { languageId, difficultyLevelId, nonPublic, prompt } = req.body;
    try {
      const newDeck = await this.deckModel.create({
        languageId,
        difficultyLevelId,
        nonPublic,
        userId,
        authorId: userId,
        nLikes: 0,
        nForks: 0,
        aiGenerated: true,
      });
      await this.requestAiCompletion(prompt, userId, newDeck.id);
      return res.json(newDeck);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  IsUsageWithinLimit = async (userId) => {
    const currentUserDecks = await this.deckModel.findOne({
      where: { userId, aiGenerated: true },
      attributes: [
        [this.sequelize.fn("COUNT", this.sequelize.col("id")), "nAiGenerated"],
      ],
      raw: true,
    });
    const numAiGeneratedDecks = parseInt(currentUserDecks.nAiGenerated);
    if (numAiGeneratedDecks >= 3) {
      return false;
    } else {
      return true;
    }
  };

  requestAiCompletion = async (prompt, userId, deckId) => {
    params.prompt = prompt;

    const result = await client.post(
      "https://api.openai.com/v1/completions",
      params
    );
    const aiSuggestedCards = JSON.parse(result.data.choices[0].text);
    await this.createCardsFromAiResponse(aiSuggestedCards, userId, deckId);
  };

  createCardsFromAiResponse = async (cardsObj, userId, deckId) => {
    for (const key in cardsObj) {
      this.cardModel.create({
        userId,
        deckId,
        front: key,
        back: cardsObj[key],
        numberOfTimesSeen: 0,
        numberOfTimesCorrect: 0,
      });
    }
  };
}

module.exports = AiController;
