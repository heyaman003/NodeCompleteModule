const http=require('node:http');
/* const serverfunc=(req,res)=>{
  console.log(req);
} */
/* const server=http.createServer((req,res)=>{
       console.log(req);
}) */
/* const server=http.createServer(serverfunc) */

const server=http.createServer(function(req,res){
       console.log(req)
});
(function(){
       console.log("hello jui") //need immediate invokations
});
server.listen(8080);