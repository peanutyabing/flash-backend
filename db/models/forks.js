"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fork extends Model {
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.language);
    }
  }
  Fork.init(
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
      modelName: "fork",
      underscored: true,
    }
  );
  return Fork;
};
