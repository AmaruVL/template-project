const router = require('express').Router();
const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
} = require('../controllers/usuarios');

router.get('/', usuariosGet);
router.put('/:id', usuariosPut);
router.post('/', usuariosPost);
router.delete('/:id', usuariosDelete);

module.exports = router;
