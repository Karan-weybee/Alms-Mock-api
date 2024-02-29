const express = require('express');
const employeeRoutes = require('./Routes/EmployeeRoutes');
const AttendanceRoutes = require('./Routes/AttendanceRoutes');
const endpoints = require('./Routes/EndPoint');
const app = express();
const PORT = 8000;

// Mounting routes
app.use('/', endpoints);
app.use('/', employeeRoutes);
app.use('/',AttendanceRoutes);

app.listen(PORT, () => console.log("server start at 8000 port..."));
