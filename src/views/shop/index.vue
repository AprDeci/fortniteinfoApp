<script setup>
import { useshopStore } from '../../store/useshopStor';
import {ref,onMounted} from 'vue';
const shopStore = useshopStore()
onMounted(() => {
    shopStore.updateShopList()
})
</script>

<template>
<div class="shop-section" v-for="(items,index) in shopStore.shopList" :key="items">
    <h2 class="section-name">{{index}}</h2>
    <div class="shop-card" v-for="item in items">
        <img class="item-img" v-lazy="item.image">
        <div class="item-info-container">
        <p class="item-name">{{ item.name }}</p>
        <p class="item-price"><img style="width: 20px; vertical-align: middle;" src="@/assets/imgs/vbuck.png" alt="">{{item.price}}</p>
    </div>
    </div>
</div>

</template>

<style scoped>
@font-face {
    font-family: fortnite;
    src: url('@/assets/bf.otf');
}
*{
    margin: 0;
    padding: 0;
    font-family: fortnite;
}
.shop-section{
    margin: 10px;
    padding: 15px;
    border: 1px solid red;
    background:black;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.section-name{
    width: 100%;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 10px;
    color: white;
    display: block;
}
.shop-card{
    height: 500px;
    overflow: hidden;
    border-radius: 20px;
    margin-bottom: 20px;
    margin-left: 0;
    border-radius: 10px;
    box-shadow: 4px 4px 4px #00000057;
    display: inline-block;
}
.item-img{
    border-radius: 10px;
    width: 200px;
    height: 500px;
    object-fit: cover;
    display: block;
    z-index: 1;
    display: block;
    overflow: hidden;
    transition: all 0.6s;  
}

.item-img:hover{
    transform: scale(1.2) rotate(5deg);
}

.item-name{
    font-size: 25px;
    color: white;
    position: relative;
    left: 10px;
}
.item-price{
    font-size: 25px;
    color: white;
    letter-spacing: 2px;
    position: relative;
    left: 10px;
}
.item-info-container{
    position: relative;
    bottom: 110px;
    padding-right: 1px;
    max-width: 200px;
    height: 100%;
    background:#00000055;
    /* white-space: nowrap; */
    overflow-x: auto;
}

</style>