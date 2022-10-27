import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'

// 引入全局样式文件
// import "@/assets/scss/index.scss";

const pinia = createPinia()
const app = createApp(App)

console.log(1122)
app.use(router)
app.use(pinia)
app.mount('#app')
