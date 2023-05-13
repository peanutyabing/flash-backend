const getUserIdFromToken = require("../utils/getUserIdFromToken.js");

class InterestController {
  constructor(model) {
    this.model = model;
  }

  getAllInterests = async (req, res) => {
    try {
      const interests = await this.model.findAll();
      return res.json(interests);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  getUserInterests = async (req, res) => {
    let { userId } = req.params;
    try {
      const userInterests = await this.model.findAll({ where: { userId } });
      return res.json(userInterests);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  addOneInterest = async (req, res) => {
    const userId = getUserIdFromToken(req);
    try {
      const newInterest = await this.model.create({ ...req.body, userId });
      return res.json(newInterest);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = InterestController;
