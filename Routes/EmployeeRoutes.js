const express = require('express');
const bodyParser = require('body-parser');
const employees = require('../Employees.json');
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/api/employees', (req, res) => {
    // #swagger.tags = ['Employees']
    return res.json(employees);
});

app.get('/api/employees/:id', (req, res) => {
     // #swagger.tags = ['Employees']
    const id = Number(req.params.id);
    console.log(id)
    const employee = employees[0]["Employees"].find((employee) => employee.EmployeeId == id);
    
    console.log(employee)
    const user = 
    {
        "success": true,
        "data": {
            "employeeId": employee.EmployeeId,
            "first Name": employee.FirstName,
            "last Name":employee.LastName,
            "mobile": employee.Mobile,
            "dateOfJoin": employee.DateOfJoin,
            "role":employee.Role,
            "email": `${employee.FirstName}@gmail.com`,
            "gender": 'Male',
            "address": "",
            "projects": ["xyz"],
            "manger": "abc",
            "employees":[""],
            "dateOfBirth": "7/18/2003"
        },
        "message": "Record loaded successfully",
        "error": null
      }
    
    return res.json(user);
});

app.post('/api/employees', (req, res) => {
    // #swagger.tags = ['Employees']
    const newEmployee = req.body;
    employees.push(newEmployee);
    // Return the newly created employee
    return res.status(201).json(newEmployee);
});

module.exports = app;
