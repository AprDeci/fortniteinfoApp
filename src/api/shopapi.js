import request from "../utils/request"
export const  getShopinfo = async(params) =>{
    console.log(import.meta.env.MODE)
    let data =  await request({
        url:"/shop",
        method:'get',
    })
    
    console.log(data)
    return data
}