"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "carritos",
      [
        {
          producto_id: 1,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto_id: 2,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto_id: 3,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          producto_id: 4,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
