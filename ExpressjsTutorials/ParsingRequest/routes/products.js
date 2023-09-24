const express=require("express");
const path=require("path");
const Productrouter=express.Router();
Productrouter
.get("/add-product", (req, res) => {
       res.sendFile(path.join(__dirname,'../','views','addproducts.html'))
     })

     Productrouter.post("/products", (req, res) => {
       console.log("Form data received:", req.body);
       res.redirect("/");
     });
module.exports=Productrouter;