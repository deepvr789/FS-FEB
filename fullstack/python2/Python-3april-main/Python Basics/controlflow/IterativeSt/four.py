eids={101,102,103,104,101,102,103,104}

print(len(eids))
#print(eids[0]) TypeError: 'set' object is not subscriptable

i=0
while i<=len(eids)-1:
    #print("GM")
    print(eids[i])
    i=i+1

""" for eid in eids:
    print(eid)

 """