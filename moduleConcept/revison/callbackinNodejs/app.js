const fs=require('fs');
console.log("hii");
fs.writeFileSync('msg.txt',"hey jui i love you");
fs.readFile('readme.txt',"utf-8",(err,result)=>{
       console.log(result);
 })

console.log('hii2');