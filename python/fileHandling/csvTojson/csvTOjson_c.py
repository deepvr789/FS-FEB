#program to read csv file and write to json file

import csv
import json

fp= open('data.csv', 'r')
reader = csv.reader(fp)
header = next(reader)
data = []
for row in reader:
    row_dict = {header[i]: value for i, value in enumerate(row)}
    data.append(row_dict)
fp= open('data.json', 'w')
json.dump(data, fp)
print("Conversion successful!")




