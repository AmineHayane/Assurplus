#coding: utf-8
# GAO Bin
import sys
import os
import re
import urllib2
import urlparse
import psycopg2
import traceback
from bs4 import BeautifulSoup


headers = {
    "Accept-Language": "en-US,en;q=0.5",

    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Referer": "http://www.priceminister.com",
    "Connection": "keep-alive"
}



#输入产品名称
name = raw_input("Please input the name:")
query= name.split()
query='%20'.join(query)


def get_page(page_num):
    print 'processing -', page_num
    url = 'https://www.leboncoin.fr/annonces/offres/ile_de_france/occasions/?o=' + str(page_num) + '&q=' +query+ '&it=1'
    print url
    try:
        req = urllib2.Request(url, headers=headers)
        page = urllib2.urlopen(req).read()
    except urllib2.HTTPError, e:
        print 'error', e.code
        return


    soup = BeautifulSoup(page, 'html5lib')
    product_list = soup.find('section', class_='tabsContent block-white dontSwitch')

    for item in product_list.find_all('li', itemtype ='http://schema.org/Offer'):
        product_url = 'https:'+item.find('a', class_='list_item clearfix trackable').attrs['href']
        print product_url
        #print 111
        download_img(product_url)

def download_img(product_url):
    name = urlparse.urlsplit(product_url).path.split('/')[-1].rstrip('.html')[:60]
    req = urllib2.Request(product_url, headers=headers)
    detail_page = urllib2.urlopen(req).read()

    d_soup = BeautifulSoup(detail_page, 'html5lib')
    #img_sec = d_soup.find('div',class_="item_image big popin-open trackable")
    #print img_sec
    if d_soup.find("meta",{"property":"og:image"}).attrs["content"]==None:
        img_url=None
    else:
        img_url='https:' + d_soup.find("meta",{"property":"og:image"}).attrs["content"]
    print img_url
    
    img_data = urllib2.urlopen(img_url).read()
    img_file_name = img_url.split('/')[-1]


    with open(img_file_name, 'wb') as F:
        F.write(img_data)


i = 1
while True:
    get_page(i)
    i+=1

        
