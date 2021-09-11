"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Departamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Categorias, { foreignKey: "departamento_id" });
    }
  }
  Departamentos.init(
    {
      nombre: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Departamentos",
    }
  );
  return Departamentos;
};
