class DifficultyLevelController {
  constructor(model) {
    this.model = model;
  }

  getAllDifficultyLevels = async (req, res) => {
    try {
      const difficultyLevels = await this.model.findAll({
        attributes: ["id", "name"],
      });
      return res.json(difficultyLevels);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = DifficultyLevelController;
