const express = require('express');
const cors = require('cors');
const employeeRoutes = require('./Routes/EmployeeRoutes');
const AttendanceRoutes = require('./Routes/AttendanceRoutes');
const LeaveRoutes = require('./Routes/LeaveRoutes');
const ProjectRoutes = require('./Routes/ProjectRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerAutogen = require('swagger-autogen')();

const app = express();
const PORT = 8000;

// Generate Swagger/OpenAPI documentation
const outputFile = './swagger_output.json';
const endpointsFiles = ['./Routes/EmployeeRoutes.js', './Routes/AttendanceRoutes.js', './Routes/LeaveRoutes.js', './Routes/ProjectRoutes.js', './Routes/EndPoint.js'];

const protocol = process.env.PROTOCOL || 'http';
const dynamicHost = {
  host: `${process.env.HOST || 'localhost:' + PORT}`,
};

const doc = {
  info: {
    version: '1.0.0',
    title: 'Your API Documentation',
  },
  ...dynamicHost,
  schemes: [protocol], // Support both HTTP and HTTPS
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {}, // You can define security definitions if needed
  definitions: {} // Your API definitions
};

app.use(cors());

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  // Serve Swagger UI with the dynamically generated documentation
  const swaggerDocument = require(outputFile);
  const swaggerOptions = {
    swaggerOptions: {
      url: '/swagger_output.json', // URL to the generated Swagger JSON
      explorer: true, // Enable the explorer view
      docExpansion: 'none', // Prevent expanding documents by default
      defaultModelsExpandDepth: -1, // Prevent expanding models by default
    },
  };

  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));
}).catch(error => console.error(error));

// Mounting routes
app.use('/', employeeRoutes);
app.use('/', AttendanceRoutes);
app.use('/', LeaveRoutes);
app.use('/', ProjectRoutes);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
