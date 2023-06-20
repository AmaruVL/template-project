const swaggerjsdoc = require('swagger-jsdoc');
require('dotenv').config();

const port = process.env.PORT || 8080;

const specs = swaggerjsdoc({
  swaggerDefinition: {
    openapi: '3.1.0',
    info: {
      title: 'API',
      version: '1.0.0',
      description: 'Documentación de la API',
    },
    components: {
      schemas: {},
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: 'Local server',
      },
    ],
  },

  apis: ['./routes/*.js'],
});

module.exports = specs;
