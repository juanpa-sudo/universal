const express = require("express");
const app = express();

app.use("/departamntos", require("./departamentos"));
app.use("/categorias", require("./categorias"));
app.use("/productos", require("./productos"));
app.use("/image", require("./imagen"));
app.use("/carrito", require("./carrito"));
app.use("/usuarios", require("./usuarios"));

module.exports = app;
