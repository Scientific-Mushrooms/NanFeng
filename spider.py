# -*- coding: utf-8 -*-  
import requests
from bs4 import BeautifulSoup
import bs4
import json
import codecs

def getHTMLText(url):
	try:
		headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'}
		r = requests.get(url, headers=headers ,timeout=30)
		r.raise_for_status()
		r.encoding = r.apparent_encoding
		return r.text
	except:
		print(url)
		print('FAIL!')
		return ""

def main():
	#data=[]
	for i in range(1,539):
		print(i)
		url = 'http://www.micourse.net/Course/'+str(i)
		html = getHTMLText(url)
		info=getdata(html)
		#data.append(info)
		printdata(info,i)
		
def getdata(html):
	soup = BeautifulSoup(html, "html.parser")
	dict={}
	dict['title']=soup.title.string
	dict['star']=soup.find(attrs={'class':'f-14 f-sub star'}).string
	info=soup.find(attrs={'class':'info-main'})
	dict['id']=info.contents[1].get_text()
	dict['type']=info.contents[3].get_text()
	dict['credit']=info.contents[5].get_text()
	dict['department']=info.contents[9].get_text()
	dict['teacher']=info.contents[11].get_text()
	dict['time']=info.contents[15].get_text()
	dict['location']=info.contents[17].get_text()
	dict['intro']=soup.find_all('div',attrs={'class':'section'})[2].get_text()
	print(dict['title'])
	return dict
	
def printdata(info,i):
        f=json.dumps(info)
        with codecs.open("./data.txt",'a+','utf8') as json_file:
            json_file.write('\n,'+f)
		
main()
