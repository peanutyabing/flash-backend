"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Interest extends Model {
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.language);
    }
  }
  Interest.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "user", key: "id" },
      },
      languageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "language", key: "id" },
      },
      fluency: {
        type: DataTypes.INTEGER,
        validate: {
          max: 5,
          min: 1,
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "interest",
      underscored: true,
    }
  );
  return Interest;
};
