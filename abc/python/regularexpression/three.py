import re

matcher=re.finditer("\w*","rahul gandhi")

for match in matcher:
    print(match.start(),match.group())
