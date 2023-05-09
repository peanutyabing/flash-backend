class LanguageController {
  constructor(model) {
    this.model = model;
  }

  getAllLanguages = async (req, res) => {
    try {
      const languages = await this.model.findAll({
        attributes: ["id", "name", "code"],
      });
      return res.json(languages);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = LanguageController;
