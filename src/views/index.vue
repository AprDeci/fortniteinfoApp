<script setup>
import { ref } from 'vue';

const nn = ref('商城')
const active = ref(0)

// 点击tabbar切换navbar

</script>

<template>
 <van-nav-bar :title="nn" fixed placeholder style="z-index: 999;"/>


<router-view to="shop"></router-view>
<van-back-top right="10vw" bottom="10vh" />

<van-tabbar route v-model="active" placeholder fixed=true style="z-index: 999;">
  <van-tabbar-item replace to="/shop" icon="cart-o" @click="nn='商城'">商店</van-tabbar-item>
  <van-tabbar-item replace to="/info" icon="search" @click="nn='查询'">查询</van-tabbar-item>
  <van-tabbar-item replace to="/test" icon="search" @click="nn='测试'">测试</van-tabbar-item>
</van-tabbar>
</template>
<style scoped>

</style>