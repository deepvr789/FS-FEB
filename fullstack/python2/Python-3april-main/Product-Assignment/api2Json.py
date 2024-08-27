import requests
import json 
fp=open('products.json','w')

resp=requests.get('https://dummyjson.com/products')
product_data=resp.json()
products=product_data['products']

def get_products(product):
    return product['category']=='groceries'

groceries=list(filter(get_products,products))

print(len(groceries))

json.dump(groceries,fp)

fp.close()