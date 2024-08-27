#what is decorator
def login_required(func):
     

    def inner(name,is_login):
        if is_login == False:
            print("Buddy! Please login-Autherization required")
        else:
            return func(name,is_login)
    return inner


@login_required
def home_page(name,is_login):
    print("Home Page")

@login_required
def order_page(name,is_login):
    print("order Page")

@login_required
def product_page(name,is_login):
    print("Products Page")


@login_required
def profile_page(name,is_login):
    print("Profile Page")
#Rahul
home_page("Rahul",True)
order_page("Rahul",False)
product_page("Rahul",True)
profile_page("Rahul",False)
#sonia
home_page("Rahul",True)
order_page("Rahul",True)
product_page("Rahul",True)
profile_page("Rahul",True)