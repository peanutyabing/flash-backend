"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "xp_activities",
      [
        {
          name: "Created account",
          points: 100,
          per_unit: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Daily check-in",
          points: 10,
          per_unit: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Created a new deck",
          points: 10,
          per_unit: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Completed a practice",
          points: 5,
          per_unit: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Completed a challenge",
          points: 10,
          per_unit: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Forked a deck",
          points: 5,
          per_unit: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Someone forked your deck",
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
