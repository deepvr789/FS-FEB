#read - user.txt file and print data

fp=open('xyz.txt','r')
data=fp.read()
print(data)
fp.close()