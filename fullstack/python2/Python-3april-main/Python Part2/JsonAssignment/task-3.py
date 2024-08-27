import json 
fp1=open('users.json','r')
users=json.load(fp1)

male_data=[]
female_data=[]

for user in users:
    if user['gender'] =="Male":
        male_data.append(user)
    elif user['gender']=="Female":
        female_data.append(user)


print(len(male_data))
print(len(female_data))
print(type(male_data))
print(type(female_data))

