class Test:
    a=10     #static variable
    def m1(self):
        self.b=20
    def m2(self):
        self.c=30
    def m3(self):
        self.d=40   

t1=Test()
t1.m1()

t2=Test()
t2.m2()
t2.m3()

print(t1.__dict__)  #{b:20}
print(t2.__dict__)  #{c:30,d:40}