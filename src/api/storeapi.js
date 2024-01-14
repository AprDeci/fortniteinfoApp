import request from "../utils/request"


function parseshoplist(data) {
    var processedList = [];
    var shoplist = data['data']['featured']['entries'];

    for (var i = 0; i < shoplist.length; i++) {
        var item = shoplist[i];
        var finalPrice = item.finalPrice;
        var devName = item.devName;
        var imgUrl = item.newDisplayAsset.materialInstances[0].images.Background;
        var color = item.newDisplayAsset.materialInstances[0].colors.Background_Color_B;

        var processedItem = {
            finalPrice: finalPrice,
            devName: devName,
            imgUrl: imgUrl,
            color: color,
        };

        processedList.push(processedItem);
    }

    return processedList;
}

export const  getStoreinfo = async(params) =>{

    let data =  await request({
        url:"/v2/shop/br",
        method:'get',
        params:{
            'language':'zh-CN'
        }
    })
    let processedList = parseshoplist(data)
    return processedList
}