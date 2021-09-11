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
     /*/

    await queryInterface.bulkInsert("categorias", [
      {
        nombre: "Repuestos Para Ollas",
        departamento_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Repuestos Para Electrodomésticos",
        departamento_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Fundidos",
        departamento_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Asadores Y Sarténes De Hierro Fundido",
        departamento_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Molinos Manuales ",
        departamento_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        nombre: "Accesorios ",
        departamento_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Cubiertos De Mesa Línea Profesional",
        departamento_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Utensilios De Cocina Profesional",
        departamento_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Vajillas ",
        departamento_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Electrodomésticos De Cocina Profesional ",
        departamento_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Cuchillos De Cocina Profesional",
        departamento_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Ollas Y Sartenes Profesionales",
        departamento_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Termos Profesionales",
        departamento_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Asadores Y Sarténes De Hierro Fundido",
        departamento_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Molinos Manuales ",
        departamento_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Cubiertos De Mesa",
        departamento_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Cuchillos",
        departamento_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Termos Y Portacomidas",
        departamento_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Utensilios De Cocina",
        departamento_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Jarras",
        departamento_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Accesorios",
        departamento_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Recipientes",
        departamento_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Cafeteras Y Teteras",
        departamento_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Exprimidores De Cítricos",
        departamento_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Hornos Tostadores Y Asadores",
        departamento_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Licuadoras Y Batidoras",
        departamento_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Planchas Para Ropa",
        departamento_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Procesadores De Alimentos Y Picatodo",
        departamento_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Ollas Y Sartenes Antiadherentes",
        departamento_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Calderos",
        departamento_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Ollas A Presión",
        departamento_id: 1,
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
    await queryInterface.bulkDelete("categorias", null, {});
  },
};
