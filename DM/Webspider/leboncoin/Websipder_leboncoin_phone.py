# _*_ coding:utf-8_*_
# Author:GAO Bin

from urllib2 import urlopen
import urllib
from urllib import urlretrieve
from bs4 import BeautifulSoup
import re
import psycopg2
import sys
reload (sys)
sys.setdefaultencoding('utf-8')


#seed_page={"leboincoin":"https://www.leboncoin.fr/_multimedia_/offres/ile_de_france/?th=1&parrot=0"}
html=urlopen("https://www.leboncoin.fr/_multimedia_/offres/ile_de_france/?th=1&parrot=0")
bsobj=BeautifulSoup(html,"html.parser")

def get_next_page(objet):
    link=objet.find("a",{"id":"next"}).attrs["href"]
    print (link)
    return link

def get_detail_page(objet):
    link="http:"+objet.find("a",{"class":"list_item clearfix trackable"}).attrs["href"]
    html_=urlopen(link)
    new_bsobj=BeautifulSoup(html_,"html.parser")

    if new_bsobj.find("h1",{"itemprop":"name"})==None:
        item_name=None
    else:
        item_name=new_bsobj.find("h1",{"itemprop":"name"}).get_text()

    if new_bsobj.find("h2",{"itemprop":"price"})==None:
        item_price=None
    else:
        item_price=new_bsobj.find("h2",{"itemprop":"price"}).attrs["content"]
        
    if new_bsobj.find("meta",{"property":"og:image"}).attrs["content"]==None:
        img_url=None
    else:
        img_url=new_bsobj.find("meta",{"property":"og:image"}).attrs["content"]

    if img_url is not None:
        urllib.urlretrieve(img_url)

    item_list=[item_name,item_price,img_url]
    for i in range(0,len(item_list)):
        if item_list[i]!=None:  
            item_list[i]=re.sub(r"[\n\s]+"," ",item_list[i])
    return item_list

def get_page(bsobj):
    itemlist=bsobj.findAll("li",{"itemtype":"http://schema.org/Offer"})
    item_index=[]
    for item in itemlist:     
        item_index.append(get_detail_page(item))

    return item_index

#while get_next_page(bsobj)!="":
#    link="http:"+get_next_page(bsobj)
#    html=urlopen(link)
#    bsobj=BeautifulSoup(html,"html.parser")
#    print get_page(bsobj)

def update_db():
    conn=psycopg2.connect(database='leboncoin', user='postgres', password='g630546915', host='127.0.0.1', port='5432')
    print 'opened database successfully'
    
    html=urlopen("https://www.leboncoin.fr/_multimedia_/offres/ile_de_france/?th=1&parrot=0")
    bsobj=BeautifulSoup(html,"html.parser")
    print 'successfully parsed'
    item=get_page(bsobj)
    cur=conn.cursor()
    link="http:"+get_next_page(bsobj)
    print link
    k=1
    
    while link!="":
        l=len(item)
        for i in range(0,l):
            pass_this=False
            for j in range(0,2):
                if item[i][j]==None:
                    pass_this=True
                if item[i][j]=='':
                    pass_this=True
                print item[i][j]
            if pass_this:
                continue

            l1=len(item[i][1])
            l2=len(item[i][0])
            l3=len(item[i][2])
            if l1 >10 or l2 >100 or l3>100:
                pass_this=True
            if pass_this:
                continue
            #k=1
            cur.execute("INSERT INTO INFO_PHONE(ID,NAME,PRICE,IMG) VALUES(%s,%s,%s,%s)", (k,item[i][0],item[i][1],'http:'+item[i][2]))
            k=k+1
            conn.commit()
            print 'record registered'
        #print 1
        link="http:"+get_next_page(bsobj)
        print link
        html=urlopen(link)
        bsobj=BeautifulSoup(html,"html.parser")
        item=get_page(bsobj)
    conn.close()

update_db()


