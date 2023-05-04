"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "peanut",
          email: "peanut@test.com",
          password:
            "$2b$10$IZEAHAL0xbh8zz2q4grHZ.od4SRk5Uc4pwD41wbt04.X8kLNp/W8y",
          xp: 200,
          last_logged_in: new Date("2023-04-20"),
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-05"),
        },
        {
          username: "ellen",
          email: "ellen@test.com",
          password:
            "$2b$10$IZEAHAL0xbh8zz2q4grHZ.od4SRk5Uc4pwD41wbt04.X8kLNp/W8y",
          xp: 100,
          last_logged_in: new Date("2023-05-02"),
          created_at: new Date("2023-05-01"),
          updated_at: new Date("2023-05-01"),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
