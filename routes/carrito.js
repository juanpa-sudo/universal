const express = require("express");
const { listCarrito } = require("../controller/CarritoController");
const router = express.Router();

router.get("/", listCarrito);

module.exports = router;
