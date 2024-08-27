import requests
import mysql.connector

resp=requests.get('https://dummyjson.com/products')
product_data=resp.json()
products=product_data['products']

beauty_products=list(filter(lambda product:product['category']=='beauty',products))
#print(len(beauty_products))
data=[]

for product in beauty_products:
    data.append((product['id'],product['title'],product['price'],product['rating'],product['stock'],product['brand'],product['returnPolicy']))

sql_st='insert into product values(%s,%s,%s,%s,%s,%s,%s);'


try:
    db_con=mysql.connector.connect(host='localhost',user='root',password='root',database='9am')
    cursor=db_con.cursor()
    cursor.executemany(sql_st,data)
    db_con.commit()
    print('Data Inserted Successfully!')
except mysql.connector.Error as err:
    print(err)
finally:
    cursor=None
    db_con=None

    pass 