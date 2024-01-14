import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/index.css'
import 'amfe-flexible'
import { Lazyload } from 'vant';
import '@/assets/css/font.css'
import { ImagePreview } from 'vant';
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(Lazyload)
app.use(ImagePreview)
app.use(pinia)
app.mount('#app')
