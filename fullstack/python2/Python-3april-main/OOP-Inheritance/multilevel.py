class GP:
    def m1(self):
        print('GP class m1 - instance method') 

class Parent(GP):
    def m2(self):
        print('Parent class m2 - instance method')  

class Child(Parent):
    def m3(self):
        print('Child class m3 - instance method')  

c1=Child()
c1.m1()
c1.m2()
c1.m3()