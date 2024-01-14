
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
import logging
from fortnitetracker import return_shop
from scrapy import scrapy

logging.basicConfig(level=logging.INFO,filename='log.log',format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0'
}
shop_url = 'https://fortnitetracker.com/shop'

scheduler = AsyncIOScheduler()
app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://192.168.8.216:8080",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#每天早上八点执行
@scheduler.scheduled_job("cron", hour=8,timezone="Asia/Shanghai",)
async def scrapy_shop():
    status_code=scrapy()
    if status_code == 200:
        logging.info("scrapy_shop")
    if status_code != 200:
        logging.error(f"爬虫失败,错误码{status_code}")

@scheduler.scheduled_job("interval", seconds=3,timezone="Asia/Shanghai")
async def test():
    logging.info("test")

@app.on_event("startup")
async def startup():
    scheduler.start()

@app.on_event("shutdown")
async def shutdown():
    scheduler.shutdown()

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


@app.get("/shop")
async def shop():
    item_data = return_shop()
    return item_data

