import json 
fp1=open('users.json','r')
users=json.load(fp1)

male_data=[]
female_data=[]

for user in users:
    if user['gender'] =="Male":
        pass
    elif user['gender']=="Female":
        pass

