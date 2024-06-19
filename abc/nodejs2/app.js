var express = require('express');
var app = express()

app.get("/", (req,resp)=>{
    response.send("Root Request")
})
app.listen(5000,(err)=>{
    if (err) throw err
    console.log("Server id Running on port : 5000")

});