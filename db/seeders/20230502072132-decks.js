"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "decks",
      [
        {
          user_id: 1,
          author_id: 1,
          language_id: 10,
          difficulty_level_id: 3,
          n_likes: 1,
          n_forks: 1,
          non_public: false,
          ai_generated: false,
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
        {
          user_id: 2,
          author_id: 1, // User 2 fored this deck from user 1
          language_id: 10,
          difficulty_level_id: 2, // User 2 edited this deck to make it easier
          n_likes: 0,
          n_forks: 0,
          non_public: false,
          ai_generated: false,
          created_at: new Date("2023-05-01"),
          updated_at: new Date("2023-05-01"),
        },
        {
          user_id: 1,
          author_id: 1,
          language_id: 59,
          difficulty_level_id: 1,
          n_likes: 0,
          n_forks: 0,
          non_public: false,
          ai_generated: false,
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("decks", null, {});
  },
};
