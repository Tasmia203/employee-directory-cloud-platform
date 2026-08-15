const express = require("express");

const router = express.Router();

let employees = [

{
id:1,
name:"John Smith",
position:"Cloud Engineer",
department:"IT",
email:"john@example.com"
},

{
id:2,
name:"Sarah Johnson",
position:"DevOps Engineer",
department:"Infrastructure",
email:"sarah@example.com"
},

{
id:3,
name:"Michael Brown",
position:"Software Engineer",
department:"Development",
email:"michael@example.com"
}

];

router.get("/", (req,res)=>{

res.json(employees);

});

router.get("/:id",(req,res)=>{

const employee = employees.find(e=>e.id==req.params.id);

if(!employee){

return res.status(404).json({

message:"Employee not found"

});

}

res.json(employee);

});

router.post("/",(req,res)=>{

const employee={

id:Date.now(),

name:req.body.name,

position:req.body.position,

department:req.body.department,

email:req.body.email

};

employees.push(employee);

res.status(201).json(employee);

});

router.put("/:id",(req,res)=>{

const employee=employees.find(e=>e.id==req.params.id);

if(!employee){

return res.status(404).json({

message:"Employee not found"

});

}

employee.name=req.body.name;
employee.position=req.body.position;
employee.department=req.body.department;
employee.email=req.body.email;

res.json(employee);

});

router.delete("/:id",(req,res)=>{

employees=employees.filter(

e=>e.id!=req.params.id

);

res.json({

message:"Employee deleted successfully"

});

});

module.exports=router;