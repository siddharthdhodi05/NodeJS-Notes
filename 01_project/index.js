const express = require("express");
const users = require("./MOCK_DATA.json")
const app = express();
const mongoose = require("mongoose")

const port = 8000;

//connection
mongoose.connect("mongodb://127.0.0.1:27017/test-database1").then(()=>{
  console.log("mongo connected");
}).catch((err) =>{
  console.log(err);
})

//schema
const userSchema = new mongoose.Schema({
  first_name:{
    type: String,
    required: true
  },
  last_name:{
    type: String,
  },
  email:{
    type:String,
    required: true,
    unique: true
  },
  job_title:{
    type: String
  },
  gender:{
    type: String
  },
})
//model
const User = mongoose.model('user',userSchema)

//creating entry
User.create({
  first_name:"Siddharth",
  last_name : "Dhodi",
  email: "siddharth.dhodi.work@gmail.com",
  job_title: "software-developer",
  gender:"Male"
})

app.get('/users',(req,res) =>{
  const html =
  `
  <ul>
    ${users.map((item)=>(`<li>${item.first_name}</li>`)).join("")}
  </ul>
  
  `
  res.send(html)
})

app.route('/api/users/:id').get((req, res)=>{
  const id = Number(req.params.id)
  const user = users.find(user =>user.id ===id)
  return res.json(user)
})
.put((req,res)=>{
  return res.json({status: "pending"})
})
.delete((req, res)=>{
  return res.json({status:"pending"})
})
.patch((req, res)=>{
  return res.json({status: "pending"})
});

app.get('/api/users',(req, res) =>{
  return res.json(users);
})

app.listen(port,()=>{
  console.log(`server started at port ${port}` )
})