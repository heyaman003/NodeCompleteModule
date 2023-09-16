const express=require('express');
const dbconn = require('./db');
const usercollection=require("./schema")
const server=express();
server.use(express.json())
const arr=[]
dbconn();
server.get('/',(req,res)=>{
       res.send('this is a get request');
})
server.post('/', async (req, res) => {
       console.log(req.body);
     
       try {
         const user = await usercollection.create({ name: 30,age:"hii" }); // This will throw a validation error
         console.log(user);
         res.send(user);
       } catch (error) {
         console.error(error.message);
         res.status(400).json({ error: "Validation error" });
       }
     });
     
server.listen(8080,()=>{
       console.log("server is running");
})