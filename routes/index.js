const express = require("express");
const app = express();

app.use("/departamntos", require("./departamentos"));
app.use("/categorias", require("./categorias"));
app.use("/productos", require("./productos"));
app.use("/image", require("./imagen"));

module.exports = app;
