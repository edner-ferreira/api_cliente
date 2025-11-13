import swaggerJSDoc from 'swagger-jsdoc'

const serverUrl = process.env.BASE_URL || 'http://localhost:3000'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API-CLIENTE',
      version: '1.0.0',
      description: 'Documentação da minha API - CRUD - DOCKER - SWAGGER - Node.js',
    },
    servers: [
      { url: serverUrl }
    ],
  },
  apis: ['./routes/ClientesRoutes.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
