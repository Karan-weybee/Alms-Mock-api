const express = require('express');
const bodyParser = require('body-parser');
const Attendances = require('../Attendances.json');
const AttendanceEmployee = require('../AttendancesEmployee.json')
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/api/attendances', (req, res) => {
      // #swagger.tags = ['Attendances']
    return res.json(Attendances);
});

app.get('/api/attendances/manager/:id', (req, res) => {
    // #swagger.tags = ['Attendances']
    return res.json(Attendances);
});


//if you pass below api in date then it filtered by date
app.get('/api/attendances/employee/:id', (req, res) => {
    // #swagger.tags = ['Attendances']
    return res.json(AttendanceEmployee);
});


module.exports = app;
