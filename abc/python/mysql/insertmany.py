import mysql.connector
from mysql.connector import Error

try:
    connection = mysql.connector.connect(
        host='localhost',
        database='testdb',
        user='root',
        password='root'
        )
    
    if connection.is_connected():
        cursor = connection.cursor()
        insert_query = """INSERT INTO users (name, esal) VALUES (%s, %s)"""
        record =[('sonia',65000),('priyanka',75000)]
        cursor.executemany(insert_query, record)
        connection.commit()
        print("Record inserted successfully")
except Error as e:
    print(f"Error while inserting data: {e}")
finally:
    if connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection is closed")