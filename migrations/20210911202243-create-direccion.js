"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Direccions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pais: {
        type: Sequelize.STRING,
      },
      departamento: {
        type: Sequelize.STRING,
      },
      municipio: {
        type: Sequelize.STRING,
      },
      id_user: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "usuarios",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Direccions");
  },
};
