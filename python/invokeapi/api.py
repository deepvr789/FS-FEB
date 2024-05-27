import requests
response= requests.get('https://jsonplaceholder.typicode.com/users')
users_list = response.json()

#print(type(users_list))
#print(users_list)

for user in users_list:
    print(user['id'],user['username'])
