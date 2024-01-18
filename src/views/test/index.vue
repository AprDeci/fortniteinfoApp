<script setup>
import { onMounted, ref } from 'vue';
import { useshopStore } from '../../store/useshopStore';


const imgurl='https://trackercdn.com/game-assets/fortnite/io/images/shop/cb6c736a4f9aef184d403f62173e367ba4b4ae949f1bf8c716cc75e128b21dfe/v2/MI_CID_335_F_Scrapyard/background.png?v=1'
const imurl='src/assets/imgs/test-img.webp'
const imurl2='src/assets/imgs/ttt2.webp'
const containerdom =ref()
const namedom = ref()
const imgindex = ref(0)
const item = ['a','b']
const iii  =ref({"name": "Slim Shady Bundle",
            "price": "2500",
            "image": [
                "https://fortnite.126386.xyz/game-assets/fortnite/io/images/shop/0e546fa4a1a9a479d5116879b6f3e27a18f203402192b21a6ce51d0ec99de469/v2/MI_Bundle_Featured_HeavyRoar/background.png?v=1",
                "https://fortnite.126386.xyz/game-assets/fortnite/io/images/shop/0e546fa4a1a9a479d5116879b6f3e27a18f203402192b21a6ce51d0ec99de469/v2/MI_Bundle_Featured_HeavyRoar_02/background.png?v=1",
                "https://fortnite.126386.xyz/game-assets/fortnite/io/images/shop/0e546fa4a1a9a479d5116879b6f3e27a18f203402192b21a6ce51d0ec99de469/v2/MI_Bundle_Featured_HeavyRoar_03/background.png?v=1",
                "https://fortnite.126386.xyz/game-assets/fortnite/io/images/shop/0e546fa4a1a9a479d5116879b6f3e27a18f203402192b21a6ce51d0ec99de469/v2/MI_Bundle_Featured_HeavyRoar_04/background.png?v=1"
            ]})



const shopStore = useshopStore()

onMounted(() => {
    shopStore.updateShopList()

})

</script>

<template>
<!-- <div class="shop-section" >
    <h2 class="section-name">Gear For Festival </h2>
    <div class="shop-card" >
        <img class="item-img" v-lazy=imurl>
        <img class="item-img" v-lazy=imurl2>
        <div class="item-info-container" ref="containerdom">
        <p class="item-name" ref="namedom">Festival bundle bundle bundle</p>
        <p class="item-price"><img style="width: 20px; vertical-align: middle;" src="@/assets/imgs/vbuck.png" alt="">1200</p>
    </div>
    </div>
    <div class="shop-card">
        <img class="item-img" v-lazy=imurl >
        <div class="item-info-container">
        <p class="item-name">Sparkplug</p>
        <p class="item-price"><img style="width: 20px; vertical-align: middle;" src="@/assets/imgs/vbuck.png" alt="">1200</p>
    </div>
</div>
    <div class="shop-card" >
        <img class="item-img" v-lazy=imurl >
        <div class="item-info-container">
        <p class="item-name">Sparkplug</p>
        <p class="item-price"><img style="width: 20px; vertical-align: middle;" src="@/assets/imgs/vbuck.png" alt="">1200</p>
    </div>
</div>
</div> -->

<div class="shop-section" v-for="(items,index) in shopStore.shopList" :key="items">
    <h2 class="section-name">{{index}}</h2>
    <div :class="'shop-card ' + index" v-for="item in items"  :style="{'height': index.includes('Jam Tracks') ? '200px' : 'none'}">
        

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

}



.item-name{
    font-size: 25px;
    color: white;
    position: relative;
    top: 20px;
    left: 40px;
}
.item-price{
    font-size: 25px;
    color: white;
    letter-spacing: 2px;
    position: relative;
    top: 20px;
    left: 30px;
}
.item-info-container{
    position: relative;
    bottom: 110px;
    padding-right: 1px;
    max-width: 200px;
    height: 100%;
    background:#00000055;

}










.wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    perspective: 1000px;
}
.card{
    width: 400px;
    height: 600px;
    position: relative;
    border-radius: 30px;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 1px 1px 20px rgba(0,0,0,0.4);
    transform-style: preserve-3d;
    animation: rotate 2.0s cubic-bezier(0.66, -0.47, 0.33, 1.5) forwards;
    overflow:hidden;
}
.card::before{
    position: absolute;
    content: '';
    width: 80%;
    height: 100%;
    background: linear-gradient(to right, transparent, rgb(255, 255, 255), transparent);
    left: -100%;
    transition: 0.5s;
    z-index: 1;
    animation: lightmove 2.4s  cubic-bezier(0.66, -0.47, 0.33, 1.5) forwards; 
}

.preview-img,
.preview-info
{
    position:absolute;
    top: 0px;
    left: 0;
    width: 400px;
    height: 600px;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 60px;
    background-color: #fff;
    border-radius: 30px;
    backface-visibility: hidden;
    object-fit: cover;
}
.preview-info{
    transform: rotateY(180deg);
}
.preview-info p{
    word-wrap: nowrap;
    width: 100%;
    text-align: center;
}

@keyframes rotate {
            0% {
                transform: rotateY(0deg);
            }

            50% {
                transform: rotateY(180deg);
            }
            
            100% {
                transform: rotateY(0deg);
            }
        }
@keyframes lightmove{
    0%{
        left: -100%;
    }
    50%{
        left: 100%;
    }
    50.1%{
        left: -100%;
    }
    100%{
        left: 100%;
    }
}
</style>