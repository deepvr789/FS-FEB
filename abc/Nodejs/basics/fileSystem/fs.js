const fs = require("fs");

//reading the synchronus
/*let data = fs.readFileSync("classnotes.txt","utf-8");
console.log(data);*/


//reading the asynchronus

fs.readFile("classnotes.txt","utf-8", (err, newData)=>{
    fs.writeFile("one.txt", newData, (err)=>{
        if (err) throw err;
        console.log("file created successfull");
    })

});
