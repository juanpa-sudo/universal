const express = require("express");
const {
  crearDepartamentos,
  listarDepartamentos,
  editarDepartamentos,
  eliminarDepartamento,
} = require("../controller/DepartamentosController");

const router = express.Router();

router.get("/", listarDepartamentos);
router.post("/", crearDepartamentos);
router.put("/:id", editarDepartamentos);
router.delete("/:id", eliminarDepartamento);

module.exports = router;
