//create server - http : node js core module
const http = require('http');
const server = http.createServer((req,resp)=>{
    resp.end("hello,HTTP Server");

});
server.listen(8000, ()=>{})