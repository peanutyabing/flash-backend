"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("deck_subcategories", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      deck_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "decks",
          key: "id",
        },
        allowNull: false,
      },
      subcategory_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "subcategories",
          key: "id",
        },
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("deck_subcategories");
  },
};
