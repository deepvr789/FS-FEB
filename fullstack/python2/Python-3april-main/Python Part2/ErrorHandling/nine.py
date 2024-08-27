try:
    #print(10/"ten")
    #print(a)
    fp=open('pro.txt')

except ZeroDivisionError as err:
    pass 
except TypeError as err:
    #print(err)
    print(10/1)
except FileNotFoundError as err:
    #print(err)
    fp=open('data.txt') 
except NameError as err:
    print(err)
    print("Variable is not defined")