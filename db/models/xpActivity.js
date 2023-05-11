"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class XpActivity extends Model {
    static associate(models) {
      this.hasMany(models.xpTransaction);
    }
  }
  XpActivity.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      points: { type: DataTypes.INTEGER, allowNull: false },
      perUnit: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
      modelName: "xpActivity",
      underscored: true,
    }
  );
  return XpActivity;
};
