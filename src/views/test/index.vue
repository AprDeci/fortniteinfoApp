<script setup>
import { onMounted, ref } from 'vue';

const imgurl='https://trackercdn.com/game-assets/fortnite/io/images/shop/cb6c736a4f9aef184d403f62173e367ba4b4ae949f1bf8c716cc75e128b21dfe/v2/MI_CID_335_F_Scrapyard/background.png?v=1'
const imurl='src/assets/imgs/test-img.webp'
const containerdom =ref()
const namedom = ref()
function changefontsize(){
     if(containerdom.value.scrollWidth>containerdom.value.offsetWidth){
         namedom.value.style.fontSize = "18px"
         console.log("dadaddadada")
     }
}
onMounted(() => {
    changefontsize()
    console.log(containerdom.value.scrollWidth)
})

</script>

<template>
<div class="shop-section" >
    <h2 class="section-name">Gear For Festival </h2>
    <div class="shop-card">
        <img class="item-img" v-lazy=imurl>
        <div class="item-info-container" ref="containerdom">
        <p class="item-name" ref="namedom">Festival bundle bundle bundle</p>
        <p class="item-price"><img style="width: 20px; vertical-align: middle;" src="@/assets/imgs/vbuck.png" alt="">1200</p>
    </div>
    </div>
    <div class="shop-card">
        <img class="item-img" v-lazy=imurl style="height: 200px;">
        <div class="item-info-container">
        <p class="item-name">Sparkplug</p>
        <p class="item-price"><img style="width: 20px; vertical-align: middle;" src="@/assets/imgs/vbuck.png" alt="">1200</p>
    </div>
</div>
    <div class="shop-card">
        <img class="item-img" v-lazy=imurl style="width: 550px;">
        <div class="item-info-container">
        <p class="item-name">Sparkplug</p>
        <p class="item-price"><img style="width: 20px; vertical-align: middle;" src="@/assets/imgs/vbuck.png" alt="">1200</p>
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

    padding: 0;
    overflow: hidden;
    border-radius: 20px;
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
    display: block;
    overflow: hidden;
    transition: all 0.6s;  
    
}

.item-img:hover{
    transform: scale(1.2) rotate(5deg);

}
.item-name{

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
