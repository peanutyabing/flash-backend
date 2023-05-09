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
          fluency: "Expert or native",
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
        {
          user_id: 1,
          language_id: 15,
          fluency: "Expert or native",
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
        {
          user_id: 1,
          language_id: 19,
          fluency: "Advanced",
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
        {
          user_id: 1,
          language_id: 31,
          fluency: "Noob",
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
        {
          user_id: 1,
          language_id: 59,
          fluency: "Intermediate",
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
        {
          user_id: 2,
          language_id: 15,
          fluency: "Noob",
          created_at: new Date("2023-05-01"),
          updated_at: new Date("2023-05-01"),
        },
        {
          user_id: 2,
          language_id: 10,
          fluency: "Proficient",
          created_at: new Date("2023-05-01"),
          updated_at: new Date("2023-05-01"),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("interests", null, {});
  },
};
