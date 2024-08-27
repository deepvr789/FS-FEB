from account import *

class CA(Account):
    min_bal=25000
    def __init__(self,id,name,email,addr,amount):
        super().__init__(name,email,addr)
        self.acc_id=id
        self.acc_bal=amount

    def cal_bal(self):
        return self.acc_bal - CA.min_bal


""" 
ca1=CA(1001,'Deepak','Deepak@gmail.com','Goa',70000)
ca2=CA(1002,'Akhil','Ak@gmail.com','Bng',90000)


print(ca1.cal_bal())
print(ca2.cal_bal())
 """