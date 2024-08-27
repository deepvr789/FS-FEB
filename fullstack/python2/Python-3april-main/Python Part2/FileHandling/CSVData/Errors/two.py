#re-create errors - FileExitError
fp=open('data.csv','x')

print(fp.name)
fp.close()