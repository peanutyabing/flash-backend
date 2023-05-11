"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class XpTransaction extends Model {
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.xpActivity);
    }
  }
  XpTransaction.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "user", key: "id" },
      },
      xpActivityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "xpActivity", key: "id" },
      },
      xpGained: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "xpTransaction",
      underscored: true,
    }
  );
  return XpTransaction;
};
