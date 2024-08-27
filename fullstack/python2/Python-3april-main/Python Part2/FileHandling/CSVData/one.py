#read data.csv file and print data
import csv 
fp=open('data.csv','r')
user_csv_obj=csv.reader(fp)

print(type(user_csv_obj))

users=list(user_csv_obj)
print(type(users))
print(users)