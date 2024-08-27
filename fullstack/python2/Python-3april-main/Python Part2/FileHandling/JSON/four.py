import json 
emp_json = '''{"id": 101, "name": "Rahul", "avail": true, "location": null}'''
#convert json to python dict type
print(type(emp_json))  # <class, str>
emp_data=json.loads(emp_json)
print(emp_data)
print(type(emp_data))  # <class,dict>
