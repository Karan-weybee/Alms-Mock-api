const express = require('express');
const employees = require('./Employees.json')
const endpoints = require('./EndPoints.json')
const app = express();
const PORT = 8000;
//routes 
app.get('/',(req,res)=>{
    return res.json(endpoints);
})

app.get('/api/employees',(req,res)=>{
    return res.json(employees);
})
app.listen(PORT,()=> console.log("server start ..."))