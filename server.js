/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Inicializando variables
const app = express();
const port = process.env.PORT || 8080;
const env = process.env.PORT || 'development';

// Middlewares
app.use(cors()); // Configuracion CORS
app.use(express.json()); // Lectura y parseo del body
app.use(express.static('public')); // Directorio publico

// Rutas
app.use('/api/usuarios', require('./routes/usuarios'));

// Establecer servidor
app.listen(port, () => {
  console.log(`Ejecución en MODO ${env.toUpperCase()}`);
  console.log(`Servidor establecido en el PUERTO ${port}`);
});
