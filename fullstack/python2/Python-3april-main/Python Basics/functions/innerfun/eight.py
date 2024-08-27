def outer():
    pass

    def inner():
        return 100

    return inner 

inner=outer()
a=inner()
print(a)
