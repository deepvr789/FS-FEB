import requests
resp=requests.get('https://dummyjson.com/products')
product_data=resp.json()
products=product_data['products']
groceries=list(filter(lambda product:product['category']=='groceries',products))
print(len(groceries))
