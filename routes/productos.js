const express = require("express");
const {
  listarProductos,
  crearProducto,
  editarProducto,
  eliminarProductos,
} = require("../controller/Productos");
const router = express.Router();

router.get("/:categoria_id", listarProductos);
router.post("/", crearProducto);
router.put("/", editarProducto);
router.delete("/", eliminarProductos);

module.exports = router;
