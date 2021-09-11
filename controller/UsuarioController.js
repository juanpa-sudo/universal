const {
  Usuario,
  Compra,
  Productos,
  Tarjeta_credito,
  Direccion,
} = require("../models/");
const listarUsuario = async (req, res) => {
  const { id } = req.params;
  const usuario = await Usuario.findAll({
    where: { id },
    include: {
      model: Direccion,
    },
    // include: {
    //   model: Compra,
    //   include: { model: Productos },
    // },
  });
  res.json(usuario);
};

module.exports = { listarUsuario };
