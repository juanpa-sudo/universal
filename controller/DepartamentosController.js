const { Departamentos } = require("../models/index");

const crearDepartamentos = async (req, res) => {
  const { body } = req;
  const departamentosNew = await Departamentos.create(body);
  res.json(departamentosNew);
};

const listarDepartamentos = async (req, res) => {
  const departamentos = await Departamentos.findAll({});
  res.json({
    departamentos,
  });
};

const editarDepartamentos = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const departamentoEditado = await Departamentos.update(body, {
    where: {
      id,
    },
  });
  const isTrue = departamentoEditado.length - 1;
  respuesta(res, isTrue);
};

const eliminarDepartamento = async (req, res) => {
  const { id } = req.params;

  const departamentoEliminado = await Departamentos.destroy({
    where: {
      id,
    },
  });
  console.log(departamentoEliminado);
  respuesta(res, departamentoEliminado);
};
const respuesta = (res, odject) => {
  if (odject) {
    res.json(odject);
  } else {
    res.json({
      msg: "no existe",
    });
  }
};
module.exports = {
  crearDepartamentos,
  listarDepartamentos,
  editarDepartamentos,
  eliminarDepartamento,
};
