let goTOGoa = (success, failure)=>{
    let acc_Bal = 20000
    if (acc_Bal > 10000) {
        success("Goa Trip")
    } else {
        failure("Not enough balance")
}
}
goTOGoa((msg) => {
    console.log("Success", msg)
}, (err) => {
    console.log("Failure", err)
})
