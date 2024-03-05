const express = require('express');
const bodyParser = require('body-parser');
const Projects = require('../Projects.json');
// const LeaveEmployee = require('../LeaveEmployee.json')
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/api/projects', (req, res) => {
    // #swagger.tags = ['Projects']
    return res.json(Projects);
});

app.get('/api/projects/manager/:id', (req, res) => {
    // #swagger.tags = ['Projects']
    return res.json(Projects);
});

app.get('/api/projects/employee/:id', (req, res) => {
    // #swagger.tags = ['Projects']
    return res.json(Projects);
});

app.get('/api/projects/:id', (req, res) => {
// #swagger.tags = ['Projects']
    const ProjectDetails =
    {
        "success": true,
        "data": {
          "employees": [
            "John",
            "Jane",
            "Michael",
            "Emily"
          ],
          "id": Number(req.params.id),
          "name": "Project 1",
          "description": "Description for Project 1",
          "startDate": "2024-01-01T00:00:00",
          "endDate": "2024-12-31T00:00:00",
          "manager": "David"
        },
        "message": "Record loaded successfully",
        "error": null
      }
    return res.json(ProjectDetails);
});
module.exports = app;
