const { Router } = require('express')
const { inicioGet } = require('../controllers/inicio')

const router = Router()

router.get('/inicio', inicioGet)

module.exports = router