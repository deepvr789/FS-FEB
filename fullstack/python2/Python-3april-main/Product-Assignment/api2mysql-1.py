import requests

resp=requests.get('https://dummyjson.com/products')
product_data=resp.json()
products=product_data['products']

beauty_products=list(filter(lambda product:product['category']=='beauty',products))
#print(len(beauty_products))
data=[]
for product in beauty_products:
    data.append((product['id'],product['title'],product['price'],product['rating'],product['stock'],product['brand'],product['returnPolicy']))
print(data)