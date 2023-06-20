const models = require('../models');

const listar = async (req, res, next) => {
  try {
    // Retorna arreglo con o sin objetos
    const uits = await models.uits.findAll({
      attributes: {
        exclude: ['fechaModificacion', 'fechaCreacion'],
      },
    });
    res.json(uits);
  } catch (err) {
    next(err);
  }
};

const buscar = async (req, res, next) => {
  try {
    const { idUit } = req.params;
    // Retorna el obj o null
    const uit = await models.uits.findByPk(idUit);

    if (!uit)
      return res.status(404).json({
        mensaje: 'No existe el UIT buscado',
      });
    res.json(uit);
  } catch (err) {
    next(err);
  }
};

const crear = async (req, res, next) => {
  try {
    // Retorna obj o null
    const uit = await models.uits.create({
      uit: req.body.uit,
      anio: req.body.anio,
      baseLegal: req.body.baseLegal,
      fechaPublicacion: req.body.fechaPublicacion,
    });

    if (!uit) {
      return res.status(412).json({
        mensaje: 'No se pudo crear el UIT correctamente',
      });
    }
    res.json({
      mensaje: 'UIT creado correctamente',
    });
  } catch (err) {
    next(err);
  }
};

const actualizar = async (req, res, next) => {
  try {
    const { idUit } = req.params;
    // Retorna un arreglo con el nro de filas afectadas
    const [uit] = await models.uits.update(
      {
        uit: req.body.uit,
        anio: req.body.anio,
        baseLegal: req.body.baseLegal,
        fechaPublicacion: req.body.fechaPublicacion,
      },
      {
        where: { idUit },
      },
    );

    if (!uit)
      return res.status(404).json({
        mensaje: 'No existe el UIT proporcionado',
      });

    res.json({ mensaje: 'UIT actualizado correctamente' });
  } catch (err) {
    next(err);
  }
};

const eliminar = async (req, res, next) => {
  try {
    const { idUit } = req.params;
    // Retorna el nro de filas afectadas
    const uit = await models.uits.destroy({
      where: {
        idUit,
      },
    });

    if (!uit)
      return res.status(412).json({
        mensaje: 'No existe el UIT proporcionado',
      });

    res.json({
      mensaje: 'UIT eliminado correctamente',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  listar,
  buscar,
  crear,
  actualizar,
  eliminar,
};
