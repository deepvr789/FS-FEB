var express = require('express');
var app = express()
app.get("/", (req,resp)=>{
    resp.send("root request")

})
app.listen(7000, (err)=> {
    if (err) throw err
    console.log("Server is running")
});