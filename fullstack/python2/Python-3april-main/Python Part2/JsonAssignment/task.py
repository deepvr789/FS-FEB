import json 
fp1=open('users.json','r')
fp2=open('male.json','w')
fp3=open('female.json','w')
users=json.load(fp1)

def get__male_users(user):
    return user['gender'] =="Male"


def get__female_users(user):
    return user['gender'] =="Female"

male_data = list(filter(get__male_users,users))
female_data = list(filter(get__female_users,users))

json.dump(male_data,fp2)
json.dump(female_data,fp3)

fp1.close()
fp2.close()
fp3.close()