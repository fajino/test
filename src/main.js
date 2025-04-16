// main.js - Vue 앱 초기화
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).use(store).mount('#app')