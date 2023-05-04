"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.deck);
    }
  }
  Card.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "user", key: "id" },
      },
      deckId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "deck", key: "id" },
      },
      front: { type: DataTypes.STRING, allowNull: false },
      back: { type: DataTypes.STRING, allowNull: false },
      numberOfTimesSeen: { type: DataTypes.INTEGER, allowNull: false },
      numberOfTimesCorrect: { type: DataTypes.INTEGER, allowNull: false },
      lastSeen: { type: DataTypes.DATE, validate: { isDate: true } },
    },
    {
      sequelize,
      modelName: "card",
      underscored: true,
      validate: {
        correctCount() {
          if (this.numberOfTimesCorrect > this.numberOfTimesSeen) {
            throw new Error(
              "Number of times correct must be smaller than or equal to number of times seen!"
            );
          }
        },
      },
    }
  );
  return Card;
};
