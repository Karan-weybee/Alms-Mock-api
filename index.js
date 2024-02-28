const express = require('express');
const employees = require('./Employees.json')

const app = express();
const PORT = 8000;
//routes 
app.get('/api/employees',(req,res)=>{
    return res.json(employees);
})
app.listen(PORT,()=> console.log("server start ..."))