"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "interests",
      [
        {
          user_id: 1,
          language_id: 10,
          fluency_level_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          language_id: 15,
          fluency_level_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          language_id: 19,
          fluency_level_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          language_id: 31,
          fluency_level_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          language_id: 59,
          fluency_level_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          language_id: 15,
          fluency_level_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          language_id: 10,
          fluency_level_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          language_id: 10,
          fluency_level_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          language_id: 15,
          fluency_level_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          language_id: 19,
          fluency_level_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          language_id: 59,
          fluency_level_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 4,
          language_id: 15,
          fluency_level_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 4,
          language_id: 10,
          fluency_level_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          language_id: 15,
          fluency_level_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          language_id: 19,
          fluency_level_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("interests", null, {});
  },
};
