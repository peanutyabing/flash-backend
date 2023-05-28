const { TranslationServiceClient } = require("@google-cloud/translate");

const options = {
  keyFilename: "utils/memorise-387910-b5b8cb531e13.json",
  projectId: "memorise-387910",
};

const location = "global";

const translationClient = new TranslationServiceClient(options);

async function translateText(text, sourceLanguageCode, targetLanguageCode) {
  const request = {
    parent: `projects/${options.projectId}/locations/${location}`,
    contents: [text],
    mimeType: "text/plain",
    sourceLanguageCode,
    targetLanguageCode,
  };
  const [response] = await translationClient.translateText(request);
  return response.translations[0].translatedText;
}

module.exports = translateText;
