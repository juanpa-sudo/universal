const { Producto, Categoria, Imagen } = require("../models");

const listarProductos = async (req, res) => {
  const { categoria_id } = req.params;
  const productos = await Producto.findAll({});
  res.json(productos);
};

const crearProducto = async (req, res) => {
  const { body } = req;
  const productoNew = await Producto.create(body);
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
