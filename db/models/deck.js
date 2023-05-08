"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    static associate(models) {
      this.belongsTo(models.user, { as: "user", foreignKey: "userId" });
      this.belongsTo(models.user, { as: "author", foreignKey: "authorId" });
      this.belongsTo(models.language);
      this.belongsTo(models.difficultyLevel);
      this.belongsToMany(models.subcategory, { through: "deck_subcategories" });
      this.hasMany(models.like);
      this.hasMany(models.fork);
      this.hasMany(models.card);
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
      difficultyLevelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "difficultyLevel", key: "id" },
      },
      nLikes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nForks: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
