"use strict";

const getData = require("../../utils/languageParser.js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = await getData();
    await queryInterface.bulkInsert("languages", data, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("languages", null, {});
  },
};
