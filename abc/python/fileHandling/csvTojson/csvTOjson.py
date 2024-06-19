#program to read csv file and write to json file

import csv
import json

fp = open('data.csv', 'r')

reader = csv.DictReader(fp)


data = []

for row in reader:
    data.append(dict(row))
fp = open('Dictdata.json', 'w')

json.dump(data, fp)



