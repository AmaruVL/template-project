const router = require('express').Router();
const { listar, buscar, crear, actualizar, eliminar } = require('../controllers/uits');

router.get('/listar', listar);
router.get('/buscar/:idUit', buscar);
router.post('/', crear);
router.put('/actualizar/:idUit', actualizar);
router.delete('/eliminar/:idUit', eliminar);

module.exports = router;
