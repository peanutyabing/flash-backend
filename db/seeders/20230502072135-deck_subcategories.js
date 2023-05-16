"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "deck_subcategories",
      [
        {
          deck_id: 1,
          subcategory_id: 3,
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
        {
          deck_id: 2,
          subcategory_id: 3,
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
        {
          deck_id: 13,
          subcategory_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          deck_id: 14,
          subcategory_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          deck_id: 15,
          subcategory_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("deck_subcategories", null, {});
  },
};
