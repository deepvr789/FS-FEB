from account import * 

class SA(Account):
    min_bal = 500

    def __init__(self,id,name,email,addr,amount):
       super().__init__(name,email,addr)
       self.acc_id=id
       self.acc_bal = amount 

        


    def cal_bal(self):
        return self.acc_bal - SA.min_bal

""" 
sa1=SA(101,'Rahul','rahul@gmail.com','Wayanad',5000)
sa2=SA(102,'Sonia','sonia@gmail.com','New Delhi',6000)
sa1.set_mobile(8899776655)
sa2.set_mobile(9988776655)
print(sa1.__dict__)
print(sa2.__dict__)

print("***Account Balance****")
print(sa1.cal_bal())
print(sa2.cal_bal()) """