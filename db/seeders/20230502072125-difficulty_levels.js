"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "difficulty_levels",
      [
        {
          name: "Beginner",
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
        {
          name: "Intermediate",
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
        {
          name: "Advanced",
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
        {
          name: "Proficient",
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
        {
          name: "Expert",
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("difficulty_levels", null, {});
  },
};
