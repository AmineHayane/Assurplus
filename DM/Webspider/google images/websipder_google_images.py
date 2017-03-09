# _*_coding: utf-8 _*_
#GAO Bin

from bs4 import BeautifulSoup
import requests
import re
import urllib2
import os
import cookielib
import json

header = {
    "Accept-Language": "en-US,en;q=0.5",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Referer": "http://www.google.fr",
    "Connection": "keep-alive"
}


def get_soup(url,header):
    return BeautifulSoup(urllib2.urlopen(urllib2.Request(url,headers=header)),'html.parser')

name = raw_input("Please input the name:")
query= name.split()
name_url='+'.join(query)
url="https://www.google.fr/search?q="+name_url+"&espv=2&biw=1366&bih=662&site=webhp&source=lnms&tbm=isch&sa=X&sqi=2&ved=0ahUKEwjV1I_U373SAhVDtRoKHURNB8UQ_AUIBygC"
print url

#图片路径
DIR="Pictures"
soup = get_soup(url,header)


ActualImages=[]#图片的url和图片的格式
for a in soup.find_all("div",{"class":"rg_meta"}):
    link = json.loads(a.text)["ou"]
    Type = json.loads(a.text)["ity"]
    ActualImages.append((link,Type))
    print link,Type
#print  "there are total" , len(ActualImages),"images"

if not os.path.exists(DIR):
            os.mkdir(DIR)
DIR = os.path.join(DIR, name)

if not os.path.exists(DIR):
            os.mkdir(DIR)

#print images,enumerate会将数组或列表组成一个索引序列。使我们再获取索引和索引内容的时候更加方便
for i , (img , Type) in enumerate(ActualImages):
    try:
        req = urllib2.Request(img, headers={'User-Agent' : header})
        raw_img = urllib2.urlopen(req).read()

        cntr = len([i for i in os.listdir(DIR) if name in i]) + 1
        print cntr
        if len(Type)==0:
            f = open(os.path.join(DIR , name + " "+ str(cntr)+".jpg"), 'wb')
        else :
            f = open(os.path.join(DIR , name + " "+ str(cntr)+"."+Type), 'wb')


        f.write(raw_img)
        f.close()
    except Exception as e:
        print "could not load : "+img
        print e


if __name__ == '__main__':
    main()