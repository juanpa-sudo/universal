const { Categoria } = require("../models");
const { Departamento } = require("../models");

const crearCategoria = async (req, res) => {
  const { body } = req;
  const categoriaNew = await Categoria.create(body);

  res.json(categoriaNew);
};

const listCategoria = async (req, res) => {
  const { departamento_id } = req.params;
  const prueba = await Departamento.findAll({
    where: {
      id: departamento_id,
    },
    include: {
      model: Categoria,
      as: "categoria",
    },
  });
  res.json(prueba);
};

module.exports = { crearCategoria, listCategoria };
