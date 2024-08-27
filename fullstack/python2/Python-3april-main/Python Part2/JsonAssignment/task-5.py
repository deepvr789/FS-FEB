import json 
fp1=open('users.json','r')
fp2=open('male.json','w')
fp3=open('female.json','w')
users=json.load(fp1)

male_data = list(filter(lambda user:user['gender']=="Male",users))
female_data = list(filter(lambda user:user['gender']=="Female",users))

json.dump(male_data,fp2)
json.dump(female_data,fp3)

fp1.close()
fp2.close()
fp3.close()