import re
number=input ('Enter the Mobile Number:')

match=re.fullmatch("[6-9]\d{9}", number)

if match != None:
    print("valid")
else:
    print(" Not valid")

