const express=require("express");
const app=express();
/* app.use('/',(req,res)=>{
       res.send("hello");
})
app.use('/user',(req,res)=>{
       res.send("hello users");
}) */
const middleware2=(req,res,next)=>{
       console.log(req);
       console.log("hello");
       res.send("hii i will send frist");
       next();
}
const middleware1=(req,res,next)=>{
      // console.log(req);
       console.log("hello");
       res.send("hii i will send frist");
       next();
}
app.use("/",middleware1,(req,res,next)=>{
       next();
})
app.use("/users",middleware2,(req,res,next)=>{
       next()
})


app.listen(8080);
