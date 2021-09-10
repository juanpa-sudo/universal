const express = require("express");
const { crearCategoria, listCategoria } = require("../controller/Categorias");
const router = express.Router();

router.post("/", crearCategoria);
router.get("/departamento/:departamento_id", listCategoria);

module.exports = router;
