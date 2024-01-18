import {defineStore} from 'pinia'
import { ref,computed } from 'vue'
import {getShopinfo} from '../api/shopapi'
export const useshopStore =defineStore('shop',()=>{
    const shopList = ref([])
    const updateShopList =async ()=>{
        var res =await getShopinfo()
        shopList.value = res
    }
    return{shopList,updateShopList}
})