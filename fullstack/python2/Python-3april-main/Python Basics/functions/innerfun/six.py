def outer():
    print("outer function")

    def inner():
        print("Inner Function")
    
    print(type(inner))
    print(id(inner))

outer()