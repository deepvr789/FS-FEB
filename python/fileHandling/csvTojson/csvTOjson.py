#program to read csv file and write to json file

import csv
import json

fp = open('data.csv', 'r')

reader = csv.reader(fp)


data = []

for row in reader:
    data.append(row)
fp = open('data.json', 'w')

json.dump(data, fp)



