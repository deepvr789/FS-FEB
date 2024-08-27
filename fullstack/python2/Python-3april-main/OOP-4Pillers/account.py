from bank import Bank 

class Account(Bank):
    def __init__(self,name,email,addr):
        self.acc_name=name
        self.acc_email=email 
        self.acc_addr=addr

    def cal_bal(self):
        return 0
    def set_mobile(self,mobile):
        self.acc_mobile=mobile 
    def get_mobile(self):
        return self.acc_mobile


""" a1=Account('Deepak','Deepak@gmail.com','Wayanad')
a1.set_mobile(9898987777)
print(a1.__dict__)
print(a1.get_mobile()) """

