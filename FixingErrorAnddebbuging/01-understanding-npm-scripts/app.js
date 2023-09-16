const http = require('http');

const {requestHandler,text} = require('./routes');

console.log(text);

const server = http.createServer(requestHandler);

server.listen(3000);
