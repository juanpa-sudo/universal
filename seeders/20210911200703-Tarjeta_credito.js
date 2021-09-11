"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('tarjeta_creditos', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "tarjeta_creditos",
      [
        {
          numero: "1231314",
          nombre: "BVA",
          validacion: new Date(),
          id_user: 1,
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
     * await queryInterface.bulkDelete('tarjeta_creditos', null, {});
     */
    await queryInterface.bulkDelete("tarjeta_creditos", null, {});
  },
};
