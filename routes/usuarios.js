const express = require("express");
const { listarUsuario } = require("../controller/UsuarioController");
const router = express.Router();

router.get("/:id", listarUsuario);

module.exports = router;
