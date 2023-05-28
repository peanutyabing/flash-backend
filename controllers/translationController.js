const translateText = require("../utils/translateText.js");

class TranslationController {
  //get request, with phrase to translate in params
  translateToEnglish = async (req, res) => {
    const { text, sourceLanguageCode } = req.query;
    try {
      const translatedText = await translateText(
        text,
        sourceLanguageCode,
        "en"
      );
      return res.json({ translatedText });
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = TranslationController;
