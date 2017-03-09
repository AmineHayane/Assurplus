# _*_coding: utf-8 _*_
# GAO Bin
import os
import urllib2
import urlparse
from bs4 import BeautifulSoup
import psycopg2

headers = {
    "Accept-Language": "en-US,en;q=0.5",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Referer": "https://www.leboncoin.fr",
    "Connection": "keep-alive"
}

# 保存图片的位置
if not os.path.exists('./pic'):
    os.mkdir('pic')


def download_img(product_url):
    name = urlparse.urlsplit(product_url).path.split('/')[-1].strip('.html')
    img_dir = os.path.join('pic', name)
    if not os.path.exists(img_dir):
        os.mkdir(img_dir)
    req = urllib2.Request(product_url, headers=headers)
    detail_page = urllib2.urlopen(req).read()
    # with open(os.path.join(img_dir, 'temp.html'), 'wb') as F:
    #     F.write(detail_page)
    d_soup = BeautifulSoup(detail_page, 'html5lib')
    for img in d_soup.find('div', class_='item_image big popin-open trackable').find_all('span'):
        for key in ['data-imgSrc']:
            if key in img.attrs:
                # 找到图片位置
                img_url = img.attrs[key]
        img_data = urllib2.urlopen(img_url).read()
        img_path = os.path.join(img_dir, img_url.split('/')[-1])
        if os.path.exists(img_path) and os.path.getsize(img_path) > 0:
            continue
        with open(img_path, 'wb') as F:
            F.write(img_data)


def get_page(page_num):
    print 'processing -', page_num
    url = 'https://www.leboncoin.fr/telephonie/offres/ile_de_france/?o=' + str(page_num)
    try:
        req = urllib2.Request(url, headers=headers)
        page = urllib2.urlopen(req).read()
    except urllib2.HTTPError, e:
        print 'error', e.code
        return
    soup = BeautifulSoup(page, 'html5lib')
    product_list = soup.find('section', class_='tabsContent block-white dontSwitch')

    '''conn = psycopg2.connect(database='priceminister', user='postgres', password='g630546915', host='127.0.0.1',
                            port='5432')
    print 'opened database successfully'
    cur = conn.cursor()'''
    for item in product_list.find_all('a',class_='list_item clearfix trackable'):
        # 产品名称
        name = item.find("h2",{"itemprop":"name"}).text
        print name
        # 图片部分HTML
        '''img_sec = item.find('img', class_='photo')
        for key in ['data-pm-lazy-src', 'pagespeed_lazy_src']:
            if key in img_sec.attrs:
                # 找到图片位置
                img_url = img_sec.attrs[key]'''
        '''price_new = item.find('h3', class_='item_price')
        #price_used = item.find('a', class_='price typeUsed')
        if price_new:
            price_new = price_new.text.strip(u'\xa0\u20ac')  # 删除货币符号
        else:
            price_new = 'no price new'''''

        product_url = item.find('a', class_='list_item clearfix trackable').attrs['href']
        #item = [name, price_new]
        #print item
        download_img(product_url)

        # 将数据转移到数据库
        '''cur = conn.cursor()
        cur.execute("INSERT INTO INFO_ITEM(NAME,PRICE_NEW,PRICE_USED,IMG) VALUES(%s,%s,%s,%s)",
                    (name, price_new, price_used, img_url))
        conn.commit()
        print "Records created successfully";
        # return item
    conn.close()'''


def main():
    i = 1
    while True:
        get_page(i)
        i += 1


if __name__ == '__main__':
    main()
