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
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forked_from_user_id: 1,
          forked_to_user_id: 2,
          forked_from_deck_id: 2,
          forked_to_deck_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forked_from_user_id: 1,
          forked_to_user_id: 2,
          forked_from_deck_id: 9,
          forked_to_deck_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forked_from_user_id: 2,
          forked_to_user_id: 1,
          forked_from_deck_id: 6,
          forked_to_deck_id: 11,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          forked_from_user_id: 3,
          forked_to_user_id: 5,
          forked_from_deck_id: 7,
          forked_to_deck_id: 12,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("forks", null, {});
  },
};
