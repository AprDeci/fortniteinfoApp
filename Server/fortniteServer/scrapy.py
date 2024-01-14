from curl_cffi import requests

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0'
}
shop_url = 'https://fortnitetracker.com/shop'
def scrapy():
    response = requests.get(shop_url,headers=headers,impersonate="chrome101")
    if response.status_code == 200:
        with open('a.html', 'w', encoding='utf-8') as f:
            f.write(response.text)
        return f"{response.status_code}"
    else :
        return f"{response.status_code}"
