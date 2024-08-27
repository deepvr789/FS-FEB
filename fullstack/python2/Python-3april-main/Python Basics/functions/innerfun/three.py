def outer():
    print("Outer Function")

    def inner():
        print("Innner Function")

    return 100

result=outer()
print(result)