import mysql.connector

try:
    dbcon=mysql.connector.connect(host="localhost",user="root",password="root",database="9am", auth_plugin='mysql_native_password')
    cur=dbcon.cursor()
    sql_st=''' 
        create table employee(
            eid int, 
            ename varchar(32),
            esal int
        );
       ''' 
    cur.execute(sql_st)
    print('Table created successfully')
except:
    print('Unable to connect')