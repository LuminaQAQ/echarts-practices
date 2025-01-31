import "@/assets/main.css"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import "@/mock/index.js"

import "echarts";

import router from "@/router/index"

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router);

app.mount('#app')
