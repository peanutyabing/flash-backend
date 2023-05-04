"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    static associate(models) {
      this.hasMany(models.deck);
      this.hasMany(models.interest);
    }
  }
  Language.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "language",
      underscored: true,
    }
  );
  return Language;
};
