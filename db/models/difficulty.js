"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Difficulty extends Model {
    static associate(models) {
      this.hasMany(models.deck);
    }
  }
  Difficulty.init(
    {
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
    },
    {
      sequelize,
      modelName: "difficulty",
      underscored: true,
    }
  );
  return Difficulty;
};
