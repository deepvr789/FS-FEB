//create server - http : node js core module
/*const http = require('http');
const server = http.createServer((req,resp)=>{
    resp.end("hello,HTTP Server");
});
server.listen(8000, (err)=>{
    if (err) throw err;
    console.log("Server Running...");
});*/

/* const http = require('http');
const server = http.createServer((req,resp)=>{
    resp.end("hello,Node Server, nodemon!!!!");
});
server.listen(8000, (err)=>{
    if (err) throw err;
    console.log("server running");

}); */

/* const http = require("http")
.createServer((req,resp)=> {
resp.end(`<h1>Helo JS</h1>`)})
.listen(7000, ()=> {
    console.log("server running")
}); */

require("http").createServer((req,resp)=> {resp.end("Good Morning")}).listen(8000)