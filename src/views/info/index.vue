<script setup>
import { ref } from 'vue';
const list =[
    'https://fortnite-api.com/images/cosmetics/br/materialinstances/mi_bundle_featured_speeddial/background_v1-2.webp',
    'https://fortnite-api.com/images/cosmetics/br/materialinstances/mi_bundle_featured_speeddial/background_v1-2.webp',
  ]
const show = ref(false)
const ppp = () => {
    showImagePreview(list)
}
</script>

<template>
个人信息
<button @click="ppp">12312321</button>
<van-button type="primary" text="显示遮罩层" @click="show = true" />
<van-overlay :show="show" @click="show = false" />
</template>

<style scoped>

</style>