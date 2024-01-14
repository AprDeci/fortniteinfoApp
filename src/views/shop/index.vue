<script setup>
import { useshopStore } from '../../store/useshopStor';
import {ref,onMounted} from 'vue';
const shopStore = useshopStore()
const show = ref(false)
const previewimg_url = ref('')
const previewimg_css=ref('')
const previewimg_name = ref('')
const previewimg_price = ref('')
onMounted(() => {
    shopStore.updateShopList()

})
const preview = (item) =>{
    previewimg_url.value = item.image
    previewimg_name.value = item.name
    previewimg_price.value = item.price
    show.value = true
    //如果图片是组合包
    if(item.name.includes('Bundle')){
        previewimg_css.value='width: 350px;object-fit: fill;'
    }else{
        previewimg_css.value=''
    }
}
const playAnimation = (e) =>{
    animate.play();
    console.log(12312)
}

</script>

<template>
<van-overlay :show="show" @click="show = false">
    <div class="wrapper" >
        <div class="card" :style="previewimg_css" @click.stop @touchstart="playAnimation">
                <img class="preview-img" :src=previewimg_url alt="" :style="previewimg_css"  >
            <div class="preview-info" :style="previewimg_css">
                <p>{{previewimg_name}}</p>
                <p><img style="width: 20px; vertical-align: middle;" src="@/assets/imgs/vbuck.png" alt="">{{previewimg_price}}</p>
            </div>
        </div>
    </div>
</van-overlay>

<div class="shop-section" v-for="(items,index) in shopStore.shopList" :key="items">
    <h2 class="section-name">{{index}}</h2>
    <div :class="'shop-card ' + index" v-for="item in items"  :style="{'height': index.includes('Jam Tracks') ? '200px' : 'none'}" @click="preview(item)">
        <img class="item-img" v-lazy="item.image" :style="{'height': index.includes('Jam Tracks') ? '200px' : 'none'}">
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