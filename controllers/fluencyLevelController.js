class FluencyLevelController {
  constructor(model) {
    this.model = model;
  }

  getAllFluencyLevels = async (req, res) => {
    try {
      const fluencyLevels = await this.model.findAll({
        attributes: ["id", "name"],
        order: [["id"]],
      });
      return res.json(fluencyLevels);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = FluencyLevelController;
