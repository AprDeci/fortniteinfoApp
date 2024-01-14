import request from "../utils/requestlocal"
export const  getShopinfo = async(params) =>{

    let data =  await request({
        url:"/shop",
        method:'get',
    })
    console.log(data)
    return data
}