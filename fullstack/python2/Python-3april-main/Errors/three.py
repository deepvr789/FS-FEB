class InsuffientFundsError(Exception):
    def __init__(self,msg):
        self.msg=msg


def withdrawl_amount(amount):
    acc_bal = int(input("Enter your Account Balance:"))

    if acc_bal < amount:
        try:
            raise InsuffientFundsError("Less Balance")
        except InsuffientFundsError as err:
            print(err)
    else:
        print("enjoy with amount!")

    print("***")

withdrawl_amount(5000)