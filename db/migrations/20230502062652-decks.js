"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("decks", {
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
      author_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        allowNull: false,
      },
      language_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "languages",
          key: "id",
        },
        allowNull: false,
      },
      difficulty_level_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "difficulty_levels",
          key: "id",
        },
        allowNull: false,
      },
      n_likes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      n_forks: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      non_public: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      ai_generated: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("decks");
  },
};
