#print all filepointer members 

fp=open('user.txt','r')
print(dir(fp))

fp.close()