import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import { Lazyload } from 'vant';
import { ImagePreview } from 'vant';
import { createPinia } from 'pinia'
import "vant/lib/index.css"
import 'swiper/css';
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(Lazyload)
app.use(ImagePreview)
app.use(pinia)
app.mount('#app')
