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
    await queryInterface.bulkInsert("departamentos", [
      {
        nombre: "Ollas y Sartenes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Electrodomésticos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Hogar y Mesa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Ferroasadores",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Ferroasadores",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Línea profesional",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Repuestos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Molinos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("departamentos", null, {});
  },
};
