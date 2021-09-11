'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarjeta_credito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tarjeta_credito.init({
    numero: DataTypes.STRING,
    nombre: DataTypes.STRING,
    validacion: DataTypes.DATE,
    id_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tarjeta_credito',
  });
  return Tarjeta_credito;
};