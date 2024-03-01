const express = require('express');
const Holidays = require('../Holidays.json');
const app = express();

app.get('/api/holidays', (req, res) => {
    // #swagger.tags = ['Holidays']
    return res.json(Holidays);
});

module.exports = app;