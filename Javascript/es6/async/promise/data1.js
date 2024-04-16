let employees=[
    {'id':101,'name':"Rahul Gandhi", sal:55000},
    {'id':102,'name':"Sonia Gandhi", sal:65000},
    {'id':103,'name':"Priyanka Gandhi", sal:75000},
    {'id':104,'name':"Modi ", sal:85000},

]
let createEmployee = (emp ) =>{
    //let emp = {id:105,name:"Amit", sal:95000}
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let flag = true;
            flag ? resolve("success") : reject("Error Occured")
            employees.push(emp)
        },2000)
    })
}
let displayEmployees= ()=>{
    setTimeout(()=>{
        let rows = ""
        for (emp of employees){
            rows = rows + `<tr>
                                <td>${emp.id}</td>
                                <td>${emp.name}</td>
                                <td>${emp.sal}</td>
                           </tr>`
        }
        document.getElementById('t_data').innerHTML =rows
    },4000)

}
createEmployee({'id':105, 'name' :"Amit", sal:95000})
.then((msg)=>{
    console.log(msg)
    
    displayEmployees()
})
.catch((err)=>{
    console.log(err)
})