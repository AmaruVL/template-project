const inicioGet = (req, res) => {
  res.json({
    msg: 'get API - Controlador',
  })
}

module.exports = {
  inicioGet
}