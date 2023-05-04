"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cards", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
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
      front: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      back: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number_of_times_seen: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      number_of_times_correct: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      last_seen: Sequelize.DATE,
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
    await queryInterface.dropTable("cards");
  },
};
