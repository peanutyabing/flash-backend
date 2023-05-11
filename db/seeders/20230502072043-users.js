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
          image_url:
            "https://img.freepik.com/free-vector/vector-set-whole-peanuts-with-shell-close-up-top-view-isolated-white-background_1284-46380.jpg?w=1800&t=st=1681205086~exp=1681205686~hmac=277a4ba675f79a81aa2454c645004008a4690d06155f66b857a5b794ca23dfe7",
          xp: 550,
          last_logged_in: new Date("2023-04-20"),
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-05-01"),
        },
        {
          username: "ellen",
          email: "ellen@test.com",
          password:
            "$2b$10$IZEAHAL0xbh8zz2q4grHZ.od4SRk5Uc4pwD41wbt04.X8kLNp/W8y",
          image_url:
            "https://img.freepik.com/free-vector/vector-set-whole-peanuts-with-shell-close-up-top-view-isolated-white-background_1284-46380.jpg?w=1800&t=st=1681205086~exp=1681205686~hmac=277a4ba675f79a81aa2454c645004008a4690d06155f66b857a5b794ca23dfe7",
          xp: 145,
          last_logged_in: new Date("2023-05-02"),
          created_at: new Date("2023-05-01"),
          updated_at: new Date("2023-05-02"),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
