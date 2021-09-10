'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imagen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Imagen.init({
    nombre: DataTypes.STRING,
    producto_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Imagen',
  });
  return Imagen;
};