import json
emp={
    'id':101,
    'name':'Rahul',
    'avail':True,
    'location':None
}
#convert python dict to json data
emp_json =json.dumps(emp)
print(emp_json)
print(type(emp_json))