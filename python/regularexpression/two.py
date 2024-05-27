import re
matcher = re.finditer("[^a-zA-Z0-9]","54+862254789215")

for match in matcher:
    print(match.start(),match.group())