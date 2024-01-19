<script setup>
import { useshopStore } from '../../store/useshopStore';
import {ref,onMounted} from 'vue';
import {Swiper,SwiperSlide} from 'swiper/vue'
import { EffectCards } from 'swiper/modules';
const shopStore = useshopStore()
const show = ref(false)
const previewimg_url = ref('')
const previewimg_css=ref('')
const previewimg_name = ref('')
const previewimg_price = ref('')
const imglist = ref([])
onMounted(() => {
    shopStore.updateShopList()

})
const preview = (item) =>{
    imglist.value = item['image']
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

// Swiper配置
import 'swiper/css';
import 'swiper/css/effect-cards';
const modules = [EffectCards]

import overlay from '../../components/overlay.vue'
</script>

<template>
<overlay :show.sync="show" @touchmove.prevent >
    <div class="wrapper" @click = "show=false">
    <swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        :cardsEffect="{
            slideShadows: true,
            perSlideRotate: 10,
            rotate:true,
            perSlideOffset:5
        }"
        class="mySwiper">

        <swiper-slide v-for="img in imglist" :key="img" @click.stop>
        <img :src="img" alt="">
        <span>{{ previewimg_price }}</span>
        <h2>{{ previewimg_name }}</h2>
        </swiper-slide>

        </swiper>
    </div>
</overlay>

<div class="shop-section" v-for="(items,index) in shopStore.shopList" :key="items">
    <h2 class="section-name">{{index}}</h2>
    <div :class="'shop-card ' + index" v-for="item in items" :style="{'height': index.includes('Jam Tracks') ? '200px' : 'none'}"   @click="preview(item)">
        <img class="item-img" v-for="img in item.image" v-lazy="img" alt="" >
        <div class="item-info-container">
            <p class="item-name">{{ item.name }}</p>
            <p class="item-price"><img style="width: 20px; vertical-align: middle;" src="@/assets/imgs/vbuck.png" alt="">{{item.price}}</p>
        </div>
    </div>
    <div class="shop-card" v-if="items.length%3==2"></div>

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
    font-size: 50px;
    font-weight: bold;
    margin: 10px 0 10px 0;
    color: white;
    display: block;
}
.shop-card{
    height: 500px;
    width: 210px;
    overflow: hidden;
    border-radius: 20px;
    margin-bottom: 20px;
    margin-left: 0;
    border-radius: 10px;
    box-shadow: 4px 4px 4px #00000057;
    display: inline-block;
    position: relative;
}
.item-img{
    border-radius: 10px;
    width: 100%;
    height: 100%;
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
    position: absolute;
    padding-right: 1px;
    width: 100%;
    height: 100%;
    background:#00000055;
    left: 0;
    top: 75%
}
/* overlay-swiper */
.wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    perspective: 1000px;
}

.swiper {
        width: 400px;
        height: 600px;
      }

.swiper-slide {
        position: relative;
        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
        border-radius: 30px;
        background: linear-gradient(to top, #0f2027, #203a4300, #2c536400),
                    no-repeat 50% 50% / cover;
      }
.swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

.swiper span,
.swiper h2 {
    color: white;
    position: relative;
    bottom: 120px;
    left: 20px;
    font-size: 45px;
}
</style>