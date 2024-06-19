#invoke rest api, analyze data and store into mysql table.

import requests
import mysql.connector

dbcon = None
mycursor = None
try:
    dbcon=mysql.connector.connect(host='localhost',user='root',password='root',database='11am')
    mycursor=dbcon.cursor()
    sql_st='''
            insert into users(uid,uname,ucity,uemail) values(%s,%s,%s,%s)
            
            '''
    data = []
    response=requests.get('https://jsonplaceholder.typicode.com/users')
    user_list= response.json()

    for user in user_list:
        data.append((user['id'],user['username'],user['address']['city'],user['email']))

    
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