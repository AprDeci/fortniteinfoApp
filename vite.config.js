import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  base: '/',
  server:{
    host:"192.168.8.216",
    port:"8080",
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    },
    dedupe: ['vue'],
  }
})
