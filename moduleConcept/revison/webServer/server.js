const http=require('http');
const server=http.createServer((req,res)=>{
       console.log("server connected")
       if(req.method=="get")
       res.setHeader("content-type","text/html")
       res.statusCode=303;
res.write("<h1>hello</h1>")

res.end();
})

server.listen(7070)