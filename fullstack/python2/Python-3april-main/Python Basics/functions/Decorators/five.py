def outer():
    print("Outer function") 

    def inner():
        print("inner function")

    return inner


inner=outer()
inner()
inner()
inner()
inner()