"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subcategory extends Model {
    static associate(models) {
      this.belongsToMany(models.language, {
        through: "language_subcategories",
      });
      this.belongsToMany(models.deck, { through: "deck_subcategories" });
    }
  }
  Subcategory.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "subcategory",
      underscored: true,
    }
  );
  return Subcategory;
};
