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
  constructor(deckModel, cardModel) {
    this.deckModel = deckModel;
    this.cardModel = cardModel;
  }

  createDeckFromUserSpecification = async (req, res) => {
    const userId = getUserIdFromToken(req);
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
