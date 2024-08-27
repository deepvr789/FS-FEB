min_bal=500    # global variable , scope - entie file

def account():
    acc_bal=5000 #local variable , scope with in the block
    print(acc_bal)
    print(min_bal)


account()
#print(acc_bal)  
print(min_bal)
