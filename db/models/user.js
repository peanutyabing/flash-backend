"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.deck);
      this.hasMany(models.card);
      this.hasMany(models.interest);
    }
  }
  User.init(
    {
      username: { type: DataTypes.STRING, allowNull: false, unique: true },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: { isEmail: true },
      },
      password: { type: DataTypes.STRING, allowNull: false },
      refreshToken: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      xp: { type: DataTypes.INTEGER },
      lastLoggedIn: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "user",
      underscored: true,
    }
  );
  return User;
};
