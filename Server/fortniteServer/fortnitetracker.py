import json
from curl_cffi import requests
import parsel





def generate_json(data):
    for name in data:
        item_list = []
        name_nospace = name.replace(' ', '')
        item_price = selector.xpath(
            f'//h2[@class="fn-shop-section" and contains(@id,"{name_nospace}")]//following-sibling::div[@class="fn-shop-grid"][1]//div[@class="fn-shop-item__price"]//text()').getall()
        item_imageurl = selector.xpath(
            f'//h2[@class="fn-shop-section" and contains(@id,"{name_nospace}")]//following-sibling::div[@class="fn-shop-grid"][1]//img[contains(@class,"fn-shop-item__image")][1]/@data-src').getall()
        item_names = selector.xpath(
            f'//h2[@class="fn-shop-section" and contains(@id,"{name_nospace}")]//following-sibling::div[@class="fn-shop-grid"][1]//div[@class="fn-shop-item__name"]//text()').getall()
        for item_name, item_price, item_image in zip(item_names, item_price, item_imageurl):
            item_price = item_price.replace(',', '')
            item = {
                "name": item_name,
                "price": item_price,
                "image": item_image
            }
            item_list.append(item)
            item_data[name] = item_list


def return_shop():
    with open('a.html', 'r', encoding='utf-8') as f:
        data = f.read()
        global selector
        selector = parsel.Selector(data)
        global item_data
        item_data = {}
        section_name = selector.xpath('//h2[@class="fn-shop-section"]//text()').getall()
        section_name=list(set(section_name))
        generate_json(section_name)
        return item_data



