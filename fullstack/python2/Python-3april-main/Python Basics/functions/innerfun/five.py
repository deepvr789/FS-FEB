#Invoke inner function outside?


def outer():
    print("outer function")

    def inner():
        print("inner function")
    
    return inner


inner=outer()
inner()
inner()
inner()
