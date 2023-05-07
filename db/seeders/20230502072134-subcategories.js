"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "subcategories",
      [
        {
          name: "GRE",
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
        {
          name: "SAT",
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
        {
          name: "HSK",
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("subcategories", null, {});
  },
};
