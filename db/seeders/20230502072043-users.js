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
          refresh_token: "",
          image_url:
            "https://img.freepik.com/free-vector/vector-set-whole-peanuts-with-shell-close-up-top-view-isolated-white-background_1284-46380.jpg?w=1800&t=st=1681205086~exp=1681205686~hmac=277a4ba675f79a81aa2454c645004008a4690d06155f66b857a5b794ca23dfe7",
          first_name: null,
          last_name: null,
          xp: 855,
          last_logged_in: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "ellen",
          email: "ellen@test.com",
          password:
            "$2b$10$IZEAHAL0xbh8zz2q4grHZ.od4SRk5Uc4pwD41wbt04.X8kLNp/W8y",
          refresh_token: "",
          image_url:
            "https://firebasestorage.googleapis.com/v0/b/memorise-flashcard-app.appspot.com/o/profile%2Fcalico.jpg?alt=media&token=fad748e2-851b-41f2-8c33-1949c7687a90",
          first_name: "Ellen",
          last_name: "J",
          xp: 1275,
          last_logged_in: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "yabs",
          email: "sherry.liuyabing@gmail.com",
          password:
            "$2b$10$rI/Vzh0iXgVgnkaefyZaEOU5gks.bliLBjwZkN38ILsGr7224XPcC",
          refresh_token: "",
          image_url:
            "https://firebasestorage.googleapis.com/v0/b/memorise-flashcard-app.appspot.com/o/profile%2F1516894023079.jpeg?alt=media&token=b38e353c-7dce-4f86-9c06-2a98c964c7fd",
          first_name: "Yabing",
          last_name: "Liu",
          xp: 320,
          last_logged_in: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "curious_academic",
          email: "lyb302808@gmail.com",
          password:
            "$2b$10$bSqhpYQF1Qw8K8H1u1HLUefRFMMxp9YbVZP5hG3dIDnFWcsfGxVWS",
          refresh_token: "",
          image_url:
            "https://firebasestorage.googleapis.com/v0/b/memorise-flashcard-app.appspot.com/o/profile%2Fpaw4.jpg?alt=media&token=8d3a618a-c32a-40fc-bfd0-3a6d03ca2f09",
          first_name: "",
          last_name: "",
          xp: 100,
          last_logged_in: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "danny",
          email: "sherry.yabingliu@gmail.com",
          password:
            "$2b$10$bXVOXuCVDiS0NU./2vkpMufP/wmUSl2vZdRcJB/biLRqStc9Aa5Km",
          refresh_token: "",
          image_url:
            "https://firebasestorage.googleapis.com/v0/b/memorise-flashcard-app.appspot.com/o/profile%2Fgreat-dane.jpg?alt=media&token=17023b06-acfa-4335-8a15-889d4de6625c",
          first_name: "Dan",
          last_name: "Wolf",
          xp: 230,
          last_logged_in: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "Memorise",
          email: "memorise.flashcards@outlook.com",
          password:
            "$2b$10$IZEAHAL0xbh8zz2q4grHZ.od4SRk5Uc4pwD41wbt04.X8kLNp/W8y",
          refresh_token: "",
          image_url:
            "https://firebasestorage.googleapis.com/v0/b/memorise-flashcard-app.appspot.com/o/profile%2Fmemorise-logo-rounded.jpg?alt=media&token=7babe622-d14b-4c30-8978-b2bdd88970a3",
          first_name: null,
          last_name: null,
          xp: 0,
          last_logged_in: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
