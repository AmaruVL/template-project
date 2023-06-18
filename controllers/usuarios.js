const models = require('../models');

const usuariosGet = async (req, res) => {
  try {
    // const usuarioModel = models.usuarios;
    // const usuarioModel2 = models.usuario;
    const usuarios = await models.usuario.findAll();
    // console.log(usuarios);
    console.log({ usuarios });
    // res.json(usuarios);
  } catch (err) {
    res.status(500).json({
      message: 'Ocurrio un error inesperado',
    });
    console.log(err);
  }
};

const usuariosPut = async (req, res) => {};

const usuariosPost = async (req, res) => {};

const usuariosDelete = async (req, res) => {};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
};
