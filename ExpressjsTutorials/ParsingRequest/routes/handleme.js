const express=require("express");
const path=require("path")
const handleme=express.Router();
handleme.use((req,res,next)=>{
       res.sendFile(path.join(__dirname,'../','views','error.html'))
})
module.exports=handleme;