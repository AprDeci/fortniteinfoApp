<script setup>
import { onMounted } from 'vue';
import {  ref,defineProps,watch } from 'vue';
import { MaskSwipe } from "fly-comp"
const props = defineProps({
  num:Number,
  shopitem:Object
});
const maskImageUrl='https://tse2-mm.cn.bing.net/th/id/OIP-C.j4A4O13jR7iochE26wPX9AHaFD?rs=1&pid=ImgDetMain'
const img = props.shopitem["image"]
 // 定义响应式变量
 const currentIndex = ref(0);
const oldCurrentIndex = ref(0);
const imgList = ref([...props.shopitem["image"], props.shopitem["image"][0]]);
const getInitZindex = () => {
  const arr = [1];
  for (let i = imgList.value.length - 1; i >= 1; i--) {
    arr.unshift(arr[0] + 1);
  }
  return arr;
}
const zIndexArr = ref([...getInitZindex()]);
const maskPosition = ref(props.maskPositionFrom || 'left');
const transition = ref(`all ${props.transitionDuration || 1}s`);
 // 设置动画参数
const transitionDuration =  1000;
const duration =  3000;

 // 监听currentIndex变化
watch(currentIndex, () => {
  if (currentIndex.value === 0) {
    zIndexArr.value = [...getInitZindex()];
  }
  maskPosition.value = props.maskPositionFrom || 'left';
  transition.value = 'none';
})
 // 执行动画
const execAnimation = () => {
  transition.value = `all 5s ease`;
  maskPosition.value = 'left';
  maskPosition.value = 'right';
  oldCurrentIndex.value = (currentIndex.value + 1) % (imgList.value.length - 1);
   setTimeout(() => {
    zIndexArr.value[currentIndex.value] = 1;
    currentIndex.value = (currentIndex.value + 1) % (imgList.value.length - 1);
  }, 1000)
}
 // 挂载时执行动画
onMounted(() => {
  const firstDelay = duration - transitionDuration;
  function animate() {
    execAnimation();
    setTimeout(animate, duration);
  }
  setTimeout(animate, firstDelay);
})


</script>

<template>
    <div class="img-container">
        <!-- <div class="swipe-item"
         :class="{'swipe-item-mask': index === currentIndex}"
         v-for="(url, index) in imgList"
         :key="index"
         :style="{ zIndex: zIndexArr[index],
         'transition': index === currentIndex ? transition : 'none',
          'mask-image': index === currentIndex ? `url(https://tse2-mm.cn.bing.net/th/id/OIP-C.j4A4O13jR7iochE26wPX9AHaFD?rs=1&pid=ImgDetMain)` : '',
         '-webkit-mask-image': index === currentIndex ? `url(https://tse2-mm.cn.bing.net/th/id/OIP-C.j4A4O13jR7iochE26wPX9AHaFD?rs=1&pid=ImgDetMain)`: '',
         'mask-position':  index === currentIndex ? maskPosition: '',
         '-webkit-mask-position':  index === currentIndex ? maskPosition: '' }">
      <img :src="url" alt=""> -->
      <MaskSwipe
        :duration="3"
        :transition-duration="1"
        :img-list=img
        maskPositionFrom="left"
        maskPositionTo="right"
        mask-image="linear-gradient(to right, #ff0000 50%, transparent 52.5%)"
        mask-size="210%"
    />
    </div>


</template>

<style scoped>
.img-container{
    position: relative;
    width: 200px;
    height: 500px;
    
}
.swipe-item:first-child {
    position: relative;
  }
.swipe-item {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;

}
img {
      display: block;
      width: 200px;
    height: 500px;
      object-fit: cover;
    }
.swipe-item-mask {
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-size: cover;
    -webkit-mask-size: cover;
  }


</style>