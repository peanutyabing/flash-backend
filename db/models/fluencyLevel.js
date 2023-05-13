"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FluencyLevel extends Model {
    static associate(models) {
      this.hasMany(models.interest);
    }
  }
  FluencyLevel.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "fluencyLevel",
      underscored: true,
    }
  );
  return FluencyLevel;
};
