/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');

// Inicializando variables
const app = express();
const port = process.env.PORT || 8080;
const env = process.env.PORT || 'development';

// Iniciando swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Middlewares
app.use(cors()); // Configuracion CORS
app.use(express.json()); // Lectura y parseo del body
app.use(express.static('public')); // Directorio publico

// Rutas
// app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/uits', require('./routes/uits'));

// Middleware para controlar errores
app.use((err, req, res, next) => {
  res.status(500).json({
    mensaje: 'Ocurrió un problema mientras se procesaba la solicitud',
    error: err.message,
  });
});

// Establecer servidor
app.listen(port, () => {
  console.log(`Ejecución en MODO ${env.toUpperCase()}`);
  console.log(`Servidor establecido en el PUERTO ${port}`);
});
