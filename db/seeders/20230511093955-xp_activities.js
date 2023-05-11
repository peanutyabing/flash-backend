"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "xp_activities",
      [
        {
          name: "sign up",
          points: 100,
          per_unit: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "daily sign in",
          points: 10,
          per_unit: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "new deck creation",
          points: 10,
          per_unit: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "practice",
          points: 5,
          per_unit: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "challenge",
          points: 10,
          per_unit: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "forking deck",
          points: 5,
          per_unit: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "deck being forked",
          points: 20,
          per_unit: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("xp_activities", null, {});
  },
};
