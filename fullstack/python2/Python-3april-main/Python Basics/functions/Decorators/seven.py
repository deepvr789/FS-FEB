def smart_div(func):

    def inner(a,b):
        if b==0:
            print("Can't Divide by Zero")
        else:
            return func(a,b)

    return inner


@smart_div
def calc(a,b):
    print(a/b)


calc(10,1)  #10.0
calc(10,0)  #cant devide by zero
calc(10,2)  #5.0
calc(200,0) 