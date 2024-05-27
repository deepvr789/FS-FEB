import mysql.connector


con=mysql.connector.connect(host='localhost',user='root',password='root',database='test')
cur=con.cursor()
sql_st = '''
        create table employee(
        eid int,
        ename varchar(32),
        sal int
        );

'''
cur.execute(sql_st)

           