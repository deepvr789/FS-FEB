#  + acting as : addition and concatination
#  *           :multipy and repitetion.

from sa import * 
from ca import * 

def get_service(obj):
    print(obj.cal_bal())

sa1=SA(101,'Rahul','rahul@gmail.com','Wayanad',5000)
ca1=CA(1001,'Deepak','Deepak@gmail.com','Goa',70000)
a1 =Account('Narasima','greetlabs@gmail.com','Banglaore')

get_service(sa1)
get_service(ca1)
get_service(a1)