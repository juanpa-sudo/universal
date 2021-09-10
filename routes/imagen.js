const express = require("express");
const { addImage } = require("../controller/Imagen");
const router = express.Router();

router.post("/", addImage);

module.exports = router;
