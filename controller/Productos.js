const { Productos, Categorias, Imagen } = require("../models");

const listarProductos = async (req, res) => {
  const { categoria_id } = req.params;
  const productos = await Categorias.findAll({
    where: { id: categoria_id },
    include: {
      model: Productos,
      include: {
        model: Imagen,
      },
    },
  });
  res.json(productos);
};

const crearProducto = async (req, res) => {
  const { body } = req;
  const productoNew = await Productos.create(body);
  res.json(productoNew);
};

const editarProducto = async (req, res) => {};
const eliminarProductos = async (req, res) => {};
module.exports = {
  listarProductos,
  crearProducto,
  editarProducto,
  eliminarProductos,
};
