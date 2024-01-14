import {defineStore} from 'pinia'
import { ref,computed } from 'vue'
import {getShopinfo} from '../api/localshopapi'
export const useshopStore =defineStore('shop',()=>{
    const shopList = ref([])
    const sections = ref([])
    const updateShopList =async ()=>{
        var res =await getShopinfo()
        shopList.value = res
        sections.value = res['sections']
        shopList.value.splice
        
    }
    return{shopList,updateShopList,sections}
})