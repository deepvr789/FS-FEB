const jwt = require('jsonwebtoken')
let user = {
    email:'deepak@gmail.com',
    password:"123asd"
}
let payload = {
    id:user.email,
    
}
let secretKey = 'HELLO';
let token = jwt.sign(payload,secretKey,{expiresIn: 60*60})
console.log(token)

jwt.verify(token, secretKey, (err,newPlayload)=> {
    if(err) throw err;
    console.log(newPlayload)
})