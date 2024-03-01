const express = require('express');
const cors = require('cors');
const employeeRoutes = require('./Routes/EmployeeRoutes');
const AttendanceRoutes = require('./Routes/AttendanceRoutes');
const LeaveRoutes = require('./Routes/LeaveRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerAutogen = require('swagger-autogen')();

const app = express();
const PORT = 8000;

// Generate Swagger/OpenAPI documentation
const outputFile = './swagger_output.json';
const endpointsFiles = ['./Routes/EmployeeRoutes.js', './Routes/AttendanceRoutes.js', './Routes/LeaveRoutes.js', './Routes/EndPoint.js'];

const dynamicHost = {
  host: process.env.HOST || 'localhost:' + PORT,
};

swaggerAutogen(outputFile, endpointsFiles, dynamicHost).then(() => {
    // Serve Swagger UI with the dynamically generated documentation
    const swaggerDocument = require(outputFile);
    const swaggerOptions = {
        swaggerOptions: {
            url: '/swagger_output.json', // URL to the generated Swagger JSON
            defaultModelsExpandDepth: -1 // Prevent expanding models by default
        }
    };
    app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));
}).catch(error => console.error(error));

app.use(cors());

// Mounting routes
app.use('/', employeeRoutes);
app.use('/', AttendanceRoutes);
app.use('/', LeaveRoutes);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
