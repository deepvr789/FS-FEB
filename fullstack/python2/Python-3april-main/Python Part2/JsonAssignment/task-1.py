import json 
fp1=open('users.json','r')
users=json.load(fp1)
print(type(users))
print(len(users))
