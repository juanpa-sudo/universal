"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Compra, { foreignKey: "user_id" });
      this.hasMany(models.Tarjeta_credito, { foreignKey: "id_user" });
      this.hasMany(models.Direccion, { foreignKey: "id_user" });
    }
  }
  Usuario.init(
    {
      nombre: DataTypes.STRING,
      apellidos: DataTypes.STRING,
      cedula: DataTypes.STRING,
      genero: DataTypes.STRING,
      fecha_nacimiento: DataTypes.DATE,
      telefono: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );
  return Usuario;
};
