const http = require('http');
const server = http.createServer((req, res) => {
       console.log(req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('content-type','application/json');
    res.write('<p>Hello world</p>'); 
    res.end();
});
server.listen(8080);
