"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    static associate(models) {
      this.hasMany(models.deck);
      this.hasMany(models.interest);
      this.belongsToMany(models.user, { through: models.interest });
      // this.belongsToMany(models.subcategory, {
      //   through: "language_subcategories",
      // });
    }
  }
  Language.init(
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      code: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
      sequelize,
      modelName: "language",
      underscored: true,
    }
  );
  return Language;
};
