"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Imagen, {
        foreignKey: "producto_id",
        as: "imagens",
      });
    }
  }
  Productos.init(
    {
      nombre: DataTypes.STRING,
      precio: DataTypes.DOUBLE,
      descripcion: DataTypes.TEXT,
      materiales: DataTypes.TEXT,
      garantia: DataTypes.STRING,
      recomendaciones: DataTypes.TEXT,
      tamaño: DataTypes.STRING,
      categoria_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Productos",
    }
  );
  return Productos;
};
