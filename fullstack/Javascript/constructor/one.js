class Account{
    min_bal=500;
  
    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount;

    }
    deposit_Amount(amount){
        this.acc_Bal= this.acc_Bal + amount;
    }
    withdraw_Amount(amount){
        this.acc_Bal = this.acc_Bal - amount;
    }
    get_Balance(){
        return this.acc_Bal;
        }
}

let a1 = new Account (101, 'rahul', 4500)
let a2 = new Account (102, 'rahul2', 5500)
let a3 = new Account (103, 'rahu3l', 6500)

console.log(a1);
console.log(a2);
console.log(a3);
a1.deposit_Amount(500);
console.log(a1.get_Balance());
a1.withdraw_Amount(3000)
console.log(a1.get_Balance());
