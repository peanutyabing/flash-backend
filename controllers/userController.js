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

  // incrementUserXp = async (req, res) => {
  //   const userId = getUserIdFromToken(req);
  //   const { xpIncrement } = req.body;
  //   try {
  //     const foundUser = await this.model.findByPk(userId);
  //     const newXp = foundUser.xp + xpIncrement;
  //     const updatedProfile = await foundUser.update(
  //       {
  //         xp: newXp,
  //         updatedAt: new Date(),
  //       },
  //       { returning: true, plain: true }
  //     );
  //     return res.json(updatedProfile);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // };

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
}

module.exports = UserController;
