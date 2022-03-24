import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入路由
import {router} from '../router/index'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
