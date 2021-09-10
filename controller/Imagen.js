const path = require("path");
const { Imagen } = require("../models/");
const addImage = async (req, res) => {
  let archivo;
  let ruta;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({
      msga: "No se subieron imagenes al servidor.",
    });
  }

  archivo = req.files.archivo;
  let extensiones = archivo.name.split(".");
  let estension = extensiones[extensiones.length - 1];
  archivo.name = `${new Date().getMilliseconds()}.${estension}`;

  ruta = `${path.resolve(__dirname, "../uploads/")}/${archivo.name}`;
  const { body } = req;

  let cuerpo = { nombre: archivo.name, producto_id: body.id };
  const imagen = await Imagen.create(cuerpo);

  archivo.mv(ruta, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ msga: "File uploaded!", imagen });
  });
};

module.exports = { addImage };
