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