const path=require("path");
const express=require("express");
const userRouter=express.Router();
userRouter.get("/",(req,res,next)=>{
      res.sendFile(path.join(__dirname,'../','views','shop.html'))
})
module.exports=userRouter;