const express=rerquire('express');
const mongoose= require('mongoose');
const cors=require('cors');
const EmployeeModel= require('./models/Employee');
const app=express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/employee",);
app.post("/register",(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees=> res.json(employees))
    .then(err=> res.json(err));
})

app.post("/login",(req,res)=>{
    const {email,password}= req.body;
    EmployeeModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("successful.")
                sessionStorage.setItem("email",user.email);
            }
            else{
                res.json("incorrect password")
            }
        }
        else{
            res.json("user is not registered.");
        }
    })
})
app.listen(3001,()=>{
    console.log(`server is running. `);
})