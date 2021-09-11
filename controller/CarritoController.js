const { Carrito, Productos, Usuario } = require("../models/");
const listCarrito = async (req, res) => {
  const carritos = await Carrito.findAll({
    where: { user_id: 1 },
    include: { model: Productos },
    // include: { model: Usuario },
  });
  res.json(carritos);
};

module.exports = { listCarrito };
