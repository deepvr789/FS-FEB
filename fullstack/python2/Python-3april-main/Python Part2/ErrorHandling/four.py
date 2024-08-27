fp=None
try:
    fp=open('abc.txt','r')
except:
    fp=open("data.txt",'r')

data=fp.read()
print(data)
print("Reading successfully")
fp.close()