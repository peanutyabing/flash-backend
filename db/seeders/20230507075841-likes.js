"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "likes",
      [
        {
          user_id: 2,
          deck_id: 1,
          created_at: new Date("2023-05-01"),
          updated_at: new Date("2023-05-01"),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("likes", null, {});
  },
};
