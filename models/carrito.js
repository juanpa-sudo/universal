"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Carrito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.Usuario, { foreignKey: "user_id" });
      this.belongsTo(models.Productos, { foreignKey: "producto_id" });
    }
  }
  Carrito.init(
    {
      producto_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Carrito",
    }
  );
  return Carrito;
};
