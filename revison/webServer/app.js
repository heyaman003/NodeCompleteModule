const http=require('http');

const server=http.createServer((req,res)=>{
       res.setHeader("content-type","text/html")
       res.write("<h1>hello</h1>")
       res.end()
});

server.listen(8080)