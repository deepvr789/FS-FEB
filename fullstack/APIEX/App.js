const express = require('express')
const app = express()

app.get("/",(req,resp)=>{
    resp.send("<h1>Testing</h1>")
});
app.use("/user",require('./router/userRouter'))
app.use("/product",require('./router/productRouter'))
app.listen(5000,(err)=>{
    if(err) throw err;
    console.log(`Server Running on port...${5000}`)
})