const express = require("express");
const users = require("./MOCK_DATA.json")
const app = express();

const port = 8000;

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