"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fork extends Model {
    static associate(models) {
      this.belongsTo(models.user, {
        as: "forkedFromUser",
        foreignKey: "forkedFromUserId",
      });
      this.belongsTo(models.user, {
        as: "forkedToUser",
        foreignKey: "forkedToUserId",
      });
      this.belongsTo(models.deck, {
        as: "forkedFromDeck",
        foreignKey: "forkedFromDeckId",
      });
      this.belongsTo(models.deck, {
        as: "forkedToDeck",
        foreignKey: "forkedToDeckId",
      });
    }
  }
  Fork.init(
    {
      forkedFromUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "user", key: "id" },
      },
      forkedToUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "user", key: "id" },
      },
      forkedFromDeckId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "deck", key: "id" },
      },
      forkedToDeckId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "deck", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "fork",
      underscored: true,
    }
  );
  return Fork;
};
