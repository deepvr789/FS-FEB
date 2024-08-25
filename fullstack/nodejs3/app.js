var express = require('express');
var app = express()


app.get("/", (req,resp)=>{
    console.log(req)
    console.log(".........................................................................................")
    console.log(resp)
    resp.send("root request")
});
app.get("/user",(req,resp)=>{
    resp.send("User Data")
});
app.get("employee",(req,resp)=>{
    resp.send("Employee Data")
});
app.listen(7000, (err)=> {
    if (err) throw err
    console.log("Server is running @ port : 7000")
});