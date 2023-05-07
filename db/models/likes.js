"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.language);
    }
  }
  Like.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "user", key: "id" },
      },
      deckId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "language", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "like",
      underscored: true,
    }
  );
  return Like;
};
