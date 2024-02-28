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

app.get('/api/employees/:id',(req,res)=>{

    const id= Number(req.params.id);
    const employee= employees.find((employee)=>employee.EmployeeId==id)
    
    const user = {...employee,
                "Email":`${employee['First Name']}@gmail.com`,
                "Gender":'Male',
                "Address":"",
                "Projects":["xyz"],
                "Manger":"abc",
                "Date Of Birth":"7/18/2003"
                }
    return res.json(user);
})
app.listen(PORT,()=> console.log("server start ..."))