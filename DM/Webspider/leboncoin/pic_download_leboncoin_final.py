#coding: utf-8
# GAO Bin

import os
import re
import requests
from bs4 import BeautifulSoup

s = requests.Session()

regex = re.compile('images\[(?:\d)\] = "([^"]*)"')  # 图片地址正则


#输入产品名称
name = raw_input("Please input the name:")
query= name.split()
query='%20'.join(query)

def get_search_page(page_num):
    """获取搜索页面"""
    print 'Processing Page [{}]'.format(page_num)
    url = 'https://www.leboncoin.fr/annonces/offres/ile_de_france/occasions/?o=' + str(page_num) + '&q=' +query+ '&it=1'
    payload = {
        'o': page_num,  # 页码
        'q': name  # 搜索关键词
    }
    res = s.get(url, params=payload)
    page = res.content
    soup = BeautifulSoup(page, 'html5lib')
    for item in soup.find('section', class_="tabsContent block-white dontSwitch").find_all('li'):
        url = item.find('a')['href']
        if not url.startswith('https://'):
            url = 'https:' + url
        get_detail_page(url)

def get_detail_page(url):
    """进入详情页下载图片"""
    print 'Get detail page -', url
    page = s.get(url).content
    d_soup = BeautifulSoup(page, 'html5lib')
    main_pic_div = d_soup.find('div', id='item_image')
    if not main_pic_div:
        print 'No img'
        return
    main_pic_url = 'https:' + main_pic_div['data-popin-content']
    download(main_pic_url)
    p_sec = d_soup.find('p', class_='item_photo')
    if not p_sec:
        # 仅有主图
        return

    js_text = p_sec.find_next('script').text
    img_result = regex.findall(js_text)
    for url in img_result:
        if not url.startswith('https://'):
            url = 'https:' + url
        download(url)

def download(url):
    """下载图片"""
    print '>>> Downloading -', url
    img_file_name = url.split('/')[-1]
    if os.path.exists(img_file_name) and os.path.getsize(img_file_name) > 0:
        return
    raw_img = s.get(url).content
    with open(img_file_name, 'wb') as F:
        F.write(raw_img)

def main():
    for i in range(1, 500):
        get_search_page(i)

if __name__ == '__main__':
    main()
