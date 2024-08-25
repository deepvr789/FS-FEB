import re

st = input("Enter email ID: ")

#contain @ and .
#greetlabs@gmail.com
#deepak@imb.com

pattern = "\w[a-zA-Z0-9_.]*@gmail[.]com"

match = re.fullmatch(pattern,st)


if match != None:
    print("Valid email ID")
else:
    print("Invalid email ID")