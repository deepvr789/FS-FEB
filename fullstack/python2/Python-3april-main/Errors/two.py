def withdrawl_amount(amount):
    acc_bal = int(input("Enter your Bal"))

    if acc_bal < amount:
        try:
            raise ZeroDivisionError("No Bal")
        except ZeroDivisionError as err:
            print(err)
    else:
        print("enjoy with amount!")

    print("***")

withdrawl_amount(5000)