import re
st = input("Enter Data:")

matcher = re.finditer("[^abcd]", st)

for match in matcher:
    print(match.start(), match.group(), match.end())