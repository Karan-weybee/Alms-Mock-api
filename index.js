const express = require('express');
const employeeRoutes = require('./Routes/EmployeeRoutes');
const endpoints = require('./Routes/EndPoint');
const app = express();
const PORT = 8000;

// Mounting routes
app.use('/', endpoints);
app.use('/', employeeRoutes);

app.listen(PORT, () => console.log("server start at 8000 port..."));
