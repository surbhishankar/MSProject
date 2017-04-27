import sys
import os, json

def linecount():
    inputfile = open("peterblumurls.txt", 'r')
    count = 0
    for lines in inputfile:
        if lines[0:4] == 'http':
            count+= 1
    inputfile.close()
    return count

inputfile=open("peterblumurls.txt",'r')
#outputfile=open("infodata.json",'wb')
urls=[]
count = linecount();
id = 0
for line in inputfile:
    if line[0:4] == 'http':
        id+=1
        length = len(line)
	photopath = line[35:49]
        year = line[35:39]
        month = line[39:41]
        date = line[41:43]
        hour = line[43:45]
        minute = line[45:47]
        sec = line[47:49]
        comma = ""
        if line[51:55] == 'http':
            web = line[50:]
        if count != id:
            comma = ","
        urls.append({"id":str(id),"content":str(line), "start":str(year)+"-"+str(month)+"-"+str(date), "time": str(hour)+":"+str(minute)+":"+str(sec),"website":str(web),"photo":str(photopath)+".png"});
with open('peterblum.json', 'w') as outputfile:
	json.dump(urls,outputfile)
inputfile.close();
outputfile.close();



    
    
    
    
    
    
    
 