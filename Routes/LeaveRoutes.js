const express = require('express');
const bodyParser = require('body-parser');
const Leaves = require('../Leaves.json');
const LeaveEmployee = require('../LeaveEmployee.json')
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/api/leaves', (req, res) => {
    return res.json(Leaves);
});

app.get('/api/leaves/manager/:id', (req, res) => {
  
    return res.json(Leaves);
});

app.get('/api/leaves/employee/:id', (req, res) => {
  
    return res.json(LeaveEmployee);
});

//for leave details 
app.get('/api/leaves/:id', (req, res) => {
  
    const LeaveDetails = {
        "LeaveId":Number(req.params.id),
        "EmployeeId": 1,
        "EmployeeName": "Cyperaceae",
        "LeaveType": "Larry Crowne",
        "From": "1/22/2024",
        "To": "10/30/2023",
        "NoOfDays": 45,
        "Reason": "(Absolutions) Pipilotti's Mistakes ((Entlastungen) Pipilottis Fehler)",
        "Status": "Approve"
    }
    return res.json(LeaveDetails);
});

module.exports = app;
