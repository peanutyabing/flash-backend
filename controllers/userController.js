const getUserIdFromToken = require("../utils/getUserIdFromToken.js");

class UserController {
  constructor(model) {
    this.model = model;
  }

  getUserProfile = async (req, res) => {
    const userId = getUserIdFromToken(req);
    try {
      const currentUser = await this.model.findOne({
        where: { id: userId },
        attributes: { exclude: ["password", "refresh_token"] },
      });
      return res.json(currentUser);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  getOtherUserProfile = async (req, res) => {
    const { userId } = req.params;
    try {
      const otherUser = await this.model.findOne({
        where: { id: userId },
        attributes: { exclude: ["password", "refresh_token"] },
      });
      return res.json(otherUser);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  updateUserProfile = async (req, res) => {
    const userId = getUserIdFromToken(req);
    try {
      const updatedProfile = await this.model.update(
        {
          ...req.body,
          updatedAt: new Date(),
        },
        {
          where: { id: userId },
          returning: true,
          plain: true,
        }
      );
      res.json(updatedProfile);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  checkIfUserExists = async (req, res) => {
    const attribute = Object.keys(req.body)[0];
    try {
      const foundUser = await this.model.findOne({
        where: { [attribute]: req.body[attribute] },
      });
      if (foundUser) {
        return res.json({ userFound: true });
      } else {
        return res.json({ userFound: false });
      }
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  deleteTestUser = async (req, res) => {
    try {
      const foundUser = await this.model.findOne({
        where: { username: req.params.username },
      });
      if (foundUser) {
        await foundUser.destroy();
        return res.json({ msg: "test user removed" });
      } else {
        return res.status(400).json({ msg: "user not found" });
      }
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = UserController;
