<script setup>
import {getShopinfo} from "@/api/localshopapi"
import { onMounted, ref } from "vue";

const previewimgurl = ref('')
const show = ref(false)
import { useshopStore } from "@/store/useshopStor";
import { storeToRefs } from "pinia";
const store = useshopStore()
onMounted(() => {
    store.updateShopList()
    getShopinfo()
})

// 预览图片
const previewImage=(url)=>{
    show.value = true
    previewimgurl.value = url
    console.log(previewimgurl.value)
}
const backcolor=(color)=>{
    return 'background-color:#'+color
}

</script>

<template>

<van-overlay :show="show" @click="show = false" >
    <div class="wrapper" @click="show=false">
        <img class="block" :src="previewimgurl" alt="">
  </div>
</van-overlay>

<div class="container">
<div class="shopcard" :style="backcolor(item.color)"  v-for="item in store.shopList" :key="item">
    <img class="shop-item-image" v-lazy="item.imgUrl" alt="" @click="previewImage(item.imgUrl)" >
    <p><img class="vbuck-img" src="@/assets/imgs/vbuck.png" alt="">{{item.finalPrice}}</p>
    <p></p>
</div>
</div>

</template>

<style scoped>

*{
    margin: 0;
    padding: 0;
}

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
    padding: 15px;
  }
.shopcard{
    width: 200px;
    height: 300px;
    margin-bottom: 20px;
    margin-left: 0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 4px 4px 4px #412e2e57;
}
.shop-item-image{
    width: 200px;
    height: 200px;
}
.vbuck-img{
    width: 30px;
    vertical-align: middle;
}
p{
    font-size: 30px;
    margin: 0;
    position: relative;
    bottom: 10px;
    left: 20%;
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .block {
    width: 400px;
    height: 400px;
    background-color: #fff;
  }
</style>