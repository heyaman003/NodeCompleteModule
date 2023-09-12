const { isUtf8 } = require('buffer');
const fs = require('fs');
console.log("hello ");
fs.readFile('readme.txt',"utf-8",(err,res)=>{
       console.log(res)
});

console.log("hii ");

