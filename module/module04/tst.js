const http=require("http");

const server=http.createServer((req,res)=>{
       res.write('<html>');
       res.write('<head><title>Enter Message</title><head>');
       res.write('<h1>hello aman</h1>');
       res.end()
       process.exit();//to exit the event loop
})
server.listen(8080);
