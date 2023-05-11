"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "xp_transactions",
      [
        {
          user_id: 1,
          xp_activity_id: 1,
          xp_gained: 100,
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
        {
          user_id: 1,
          xp_activity_id: 3,
          xp_gained: 12 * 10,
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
        {
          user_id: 1,
          xp_activity_id: 3,
          xp_gained: 7 * 10,
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
        {
          user_id: 1,
          xp_activity_id: 2,
          xp_gained: 10,
          created_at: new Date("2023-04-05"),
          updated_at: new Date("2023-04-05"),
        },
        {
          user_id: 1,
          xp_activity_id: 2,
          xp_gained: 10,
          created_at: new Date("2023-04-20"),
          updated_at: new Date("2023-04-20"),
        },
        {
          user_id: 2,
          xp_activity_id: 1,
          xp_gained: 100,
          created_at: new Date("2023-05-01"),
          updated_at: new Date("2023-05-01"),
        },
        {
          user_id: 1,
          xp_activity_id: 7,
          xp_gained: 20 * 12,
          created_at: new Date("2023-05-01"),
          updated_at: new Date("2023-05-01"),
        },
        {
          user_id: 2,
          xp_activity_id: 2,
          xp_gained: 5 * 7,
          created_at: new Date("2023-05-02"),
          updated_at: new Date("2023-05-02"),
        },
        {
          user_id: 2,
          xp_activity_id: 2,
          xp_gained: 10,
          created_at: new Date("2023-05-02"),
          updated_at: new Date("2023-05-02"),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("xp_transactions", null, {});
  },
};
