import requests
from pymongo import MongoClient

resp=requests.get('https://dummyjson.com/products')
product_data=resp.json()
products=product_data['products']

groceries=[]
for product in products:
    if product['category']=='groceries':
        groceries.append(product)

try:
    client=MongoClient('mongodb://localhost:27017/')
    db=client['10am']
    col=db['products']
    col.insert_many(groceries)
    print('Data Inserted Successfully')
except:
    print('Unable to connect')
    pass
finally:
    client=None
    pass