const express = require("express");
const {
  crearCategoria,
  listCategoria,
} = require("../controller/CategoriasController");
const router = express.Router();

router.post("/", crearCategoria);
router.get("/departamento/:departamento_id", listCategoria);

module.exports = router;
