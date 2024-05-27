import mysql.connector
from mysql.connector import Error

def insert_user(name, email):
    try:
        connection = mysql.connector.connect(
            host='localhost',
            database='testdb',
            user='root',
            password='root'
        )
        if connection.is_connected():
            cursor = connection.cursor()
            insert_query = """INSERT INTO users (name, email) VALUES (%s, %s)"""
            record = (name, email)
            cursor.execute(insert_query, record)
            connection.commit()
            print("Record inserted successfully")
    except Error as e:
        print(f"Error while inserting data: {e}")
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")
insert_user('Deepak', 'deepak@gmail.com')
