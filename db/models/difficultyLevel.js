"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DifficultyLevel extends Model {
    static associate(models) {
      this.hasMany(models.deck);
    }
  }
  DifficultyLevel.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "difficultyLevel",
      underscored: true,
    }
  );
  return DifficultyLevel;
};
