import mysql.connector
from mysql import *

try:
    dbcon=mysql.connector.connect(host='localhost',user='root',password='root',database='9am')
    cursor=dbcon.cursor()
    sql_st='''
            insert into employee values(%s,%s,%s);
           '''
    data = [(102,'sonia',65000),(103,'priyanka',75000)]
    cursor.executemany(sql_st,data)
    dbcon.commit()
    print("Data inserted successfully")
except mysql.connector.Error as err:
    print(err)
finally:
    cursor.close()
    dbcon.close()