"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "forks",
      [
        {
          forked_from_user_id: 1,
          forked_to_user_id: 2,
          forked_from_deck_id: 1,
          forked_to_deck_id: 3,
          created_at: new Date("2023-05-01"),
          updated_at: new Date("2023-05-01"),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("forks", null, {});
  },
};
