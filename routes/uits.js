const router = require('express').Router();
const { listar, buscar, crear, actualizar, eliminar } = require('../controllers/uits');
/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/listar', listar);
router.get('/buscar/:idUit', buscar);
router.post('/', crear);
router.put('/actualizar/:idUit', actualizar);
router.delete('/eliminar/:idUit', eliminar);

module.exports = router;
