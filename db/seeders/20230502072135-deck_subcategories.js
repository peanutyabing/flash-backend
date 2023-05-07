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
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("deck_subcategories", null, {});
  },
};
