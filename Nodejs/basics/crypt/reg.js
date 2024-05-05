const bcrypt = require('bcryptjs')
let userDetails = {
    name : "Deepak",
    email : "deep@gmail.com",
    password : "123@deep",
};
let newPassword = bcrypt.hashSync(userDetails.password, 10);
console.log(newPassword);

userDetails = {...userDetails, password: newPassword};
console.log(userDetails);

if (bcrypt.compareSync("123@deep", userDetails.password)) {
    console.log("Password matched");
} else {
    console.log("Password not matched");
}