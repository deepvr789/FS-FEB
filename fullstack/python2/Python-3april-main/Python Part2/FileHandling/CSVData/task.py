#read emp.csv file and print all employee names
import csv 

fp=open('emp.csv','r')

emp_reader_obj = csv.reader(fp)
employees=list(emp_reader_obj)

for employee in employees:
    print("Id:",employee[0],"Name:",employee[1],"Gender:",employee[2])