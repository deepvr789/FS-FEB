def outer():
    print("Outer Function!")

    def inner1():
        print("Inner Function 1")
    inner1()

    def inner2():
        print("Inner Function 2")
    inner2()

    
outer()
