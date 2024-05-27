from pymongo import MongoClient
import requests
import json
resp= requests.get('https://jsonplaceholder.typicode.com/users')#this is rest api url

user_list = resp.json()


client= MongoClient("mongodb://localhost:27017")
print("Connection Successful")

db = client['9am']

user_collection = db['users']

user_collection.insert_one({'id' :101, 'name':"deepak"})

#mysql and json


