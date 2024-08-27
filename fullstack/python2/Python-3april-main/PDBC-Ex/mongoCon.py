#import pymongo
from pymongo import MongoClient
#print(dir(pymongo))

client=MongoClient("mongodb://localhost:27017")

print("Connection Successful")
db=client['9am']
user_collection=db['users']

user_collection.insert_one({"eid":101,"ename":"Rahul"})

print("Inserted successfully")
