const express = require('express');
const endpoints = require('../EndPoints.json');
const app = express();

app.get('/', (req, res) => {
    return res.json(endpoints);
});

module.exports = app;
