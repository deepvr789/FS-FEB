const express =  require('express')
const router = express.Router();

router.get("/",(req,resp)=>{
    
    resp.send(`<h1>Root User - Request</h1>`)
})
router.get("/login",(req,resp)=>{
    resp.send(`<h1>Login User - Request</h1>`)
})
router.get("/registration",(req,resp)=>{
    resp.send(`<h1>Registration User - Request</h1>`)

})
router.get("/Alluser",(req,resp)=>{
    resp.send(`<h1>All User - Request</h1>`)

})

module.exports = router;

/* app.get("/user",(req,resp)=>{
    resp.send("<h1>User</h1>")
});
app.get("/user/login",(req,resp)=>{
    resp.send("<h1>Login</h1>")
});
app.get("/user/registration",(req,resp)=>{
    resp.send("<h1>User Registration</h1>")
}); */