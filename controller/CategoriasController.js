const { Categorias } = require("../models");
const { Departamentos } = require("../models");

const crearCategoria = async (req, res) => {
  const { body } = req;
  const categoriaNew = await Categorias.create(body);

  res.json(categoriaNew);
};

const listCategoria = async (req, res) => {
  const { departamento_id } = req.params;
  const prueba = await Departamentos.findAll({
    where: {
      id: departamento_id,
    },
    include: {
      model: Categorias,
    },
  });
  res.json(prueba);
};

module.exports = { crearCategoria, listCategoria };
