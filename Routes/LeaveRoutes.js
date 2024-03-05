const express = require('express');
const bodyParser = require('body-parser');
const Leaves = require('../Leaves.json');
const LeaveEmployee = require('../LeaveEmployee.json')
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/api/leaves', (req, res) => {
    // #swagger.tags = ['Leaves']
    return res.json(Leaves);
});

app.get('/api/leaves/manager/:id', (req, res) => {
  // #swagger.tags = ['Leaves']
    return res.json(Leaves);
});

app.get('/api/leaves/employee/:id', (req, res) => {
  // #swagger.tags = ['Leaves']
    return res.json(LeaveEmployee);
});

//for leave details 
app.get('/api/leaves/:id', (req, res) => {
  // #swagger.tags = ['Leaves']
    const LeaveDetails = 
    {
        "success": true,
        "data":{
            "leaveId":Number(req.params.id),
            "employeeId": 1,
            "employeeName": "Cyperaceae",
            "leaveType": "Larry Crowne",
            "from": "1/22/2024",
            "to": "10/30/2023",
            "noOfDays": 45,
            "reason": "(Absolutions) Pipilotti's Mistakes ((Entlastungen) Pipilottis Fehler)",
            "status": "Approve"
        },
        "message": "Record loaded successfully",
        "error": null
      }
    return res.json(LeaveDetails);
});

module.exports = app;
