"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "userId" });
      this.belongsTo(models.user, { foreignKey: "authorId" });
      this.belongsTo(models.language);
      this.belongsTo(models.difficulty);
    }
  }
  Deck.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "user", key: "id" },
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "user", key: "id" },
      },
      languageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "language", key: "id" },
      },
      difficultyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "difficulty", key: "id" },
      },
      public: { type: DataTypes.BOOLEAN, allowNull: false },
      aiGenerated: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "deck",
      underscored: true,
    }
  );
  return Deck;
};
