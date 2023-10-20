"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Movies",
      [
        {
          title: "Movies 1",
          genres: "Komedi",
          year: "2023",
          photo: "photo-1697730292989.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Movies 2",
          genres: "Komedi",
          year: "2023",
          photo: "photo-1697730292989.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Movies 3",
          genres: "Komedi",
          year: "2023",
          photo: "photo-1697730292989.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
