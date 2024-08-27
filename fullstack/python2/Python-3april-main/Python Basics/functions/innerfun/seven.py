def outer():
    print("outer function")

    def inner():
        print("Inner Function")
    
    print(id(inner))
    
    return inner

x=outer()
print(id(x))