const express = require('express');
const bodyParser = require('body-parser');
const Projects = require('../Projects.json');
// const LeaveEmployee = require('../LeaveEmployee.json')
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/api/projects', (req, res) => {
    return res.json(Projects);
});

app.get('/api/projects/manager/:id', (req, res) => {
    return res.json(Projects);
});

app.get('/api/projects/employee/:id', (req, res) => {
    return res.json(Projects);
});

app.get('/api/projects/:id', (req, res) => {

    const ProjectDetails ={
        "Id": Number(req.params.id),
        "Name": "Ardelle",
        "Descriptions":"shdfjh ksujghjs hfjkgkdl dhjgfh djhfgd",
        "Manager": "Marxsen",
        "Employees": ["Gwyn","Borg","Borgs"],
        "StartDate": "7/13/2023",
        "EndDate": "6/13/2023"
    
    }
    return res.json(ProjectDetails);
});
module.exports = app;
