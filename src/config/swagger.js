/**
 * Swagger / OpenAPI Specification Config
 */
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Project Father REST API",
      version: "1.0.0",
      description: "OpenAPI documentation for Project Father backend endpoints",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local Development Server",
      },
    ],
  },
  apis: ["./src/app.js"],
};

module.exports = swaggerJSDoc(options);