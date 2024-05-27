import requests
import mysql.connector

dbcon = None
mycursor = None

try:
    dbcon=mysql.connector.connect(host='localhost',user='root',password='root',database='11am')
    mycursor=dbcon.cursor()
    sql_st='''
            insert into products(pid,pname,price,brand) values(%s,%s,%s,%s)

            '''
    data=[]
    resp=requests.get('https://dummyjson.com/products')
    product_dict=resp.json()
    #print(type(product_dict[]))    
    
    for product in product_dict['products']:
        data.append((product['id'], product['title'], product['price'], product['brand']))

    mycursor.executemany(sql_st,data)
    dbcon.commit()
    print('data inserted successfully')

except mysql.connector.DatabaseError as err :
    if err:
        print(err)
    
finally:
    if mycursor:
        mycursor.close()
    if dbcon:
        dbcon.close()