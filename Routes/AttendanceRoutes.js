const express = require('express');
const bodyParser = require('body-parser');
const employees = require('../Employees.json');
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/api/attendances', (req, res) => {
    return res.json(employees);
});

app.get('/api/employees/:id', (req, res) => {
    const id = Number(req.params.id);
    const employee = employees.find((employee) => employee.EmployeeId == id);
    const user = {
        ...employee,
        "Email": `${employee['First Name']}@gmail.com`,
        "Gender": 'Male',
        "Address": "",
        "Projects": ["xyz"],
        "Manger": "abc",
        "Date Of Birth": "7/18/2003"
    }
    return res.json(user);
});

app.post('/api/employees', (req, res) => {
    const newEmployee = req.body;
    employees.push(newEmployee);
    // Return the newly created employee
    return res.status(201).json(newEmployee);
});

module.exports = app;
