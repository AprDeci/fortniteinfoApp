import {defineStore} from 'pinia'
import { ref } from 'vue'
import {getStoreinfo} from '../api/storeapi'
export const useshopStore =defineStore('shop',()=>{
    const shopList = ref([])
    const updateShopList =async ()=>{
        var res =await getStoreinfo()
        shopList.value = res
    }
    return{shopList,updateShopList}
})