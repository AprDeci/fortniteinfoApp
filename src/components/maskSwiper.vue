<script setup>
import { ref,watch,onMounted,defineProps } from 'vue';
const props = defineProps({
  imglist: { type: Array}
})
const currentIndex = ref(-1);
const imgList = ref([...props.imglist]);
const duration = 6000;
const transitionDuration = 1500;
const getInitZindex = () => {
  const arr = [1];
  for (let i = imgList.value.length - 1; i >= 1; i--) {
    arr.unshift(arr[0] + 1); 
  }
  return arr;
}
const zIndexArr = ref([...getInitZindex()]);
watch(currentIndex, () => {
  if (currentIndex.value === 0) {
    zIndexArr.value = [...getInitZindex()];
  }
})
const execAnimation = () => {
   setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % (imgList.value.length - 1);
    //调整Z-index
    for (let i = 0; i < zIndexArr.value.length; i++) {
      if (i === currentIndex.value) {
        zIndexArr.value[i] = 3;
      } else if (i === currentIndex.value-1) {
        zIndexArr.value[i] = 2;
      } else {
        zIndexArr.value[i] = 1;
      }
    }
  }, 3000)
}

onMounted(()=> {
  const firstDelay = duration - 3000;
  function animate() {
    execAnimation();
    setTimeout(animate, duration);
  }
  setTimeout(animate, firstDelay);
})



</script>
<template>
    <div class="container">
        <img class="swipe-item"
           :class="{'swipe-item-mask': index === currentIndex}"
           v-for="(url, index) in imgList"
           :key="index"
           :style="{ zIndex: zIndexArr[index]}"
           :src="url">
          
    </div>

</template>
<style lang="scss" scoped>
@keyframes maskRotate {
    @for $i from 0 through 100 { 
        #{$i}% {
            mask: linear-gradient(180deg, rgba(28,0,36,1) #{$i+'%'}, rgba(0,212,255,0) #{$i+'%'});
        }
    }
}
.container{
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
    img{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .swipe-item-mask {
      mask-repeat: no-repeat;
      -webkit-mask-repeat: no-repeat;
      mask-size: cover;
      animation: maskRotate 3s linear;
  }

}
</style>