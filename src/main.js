import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as axios from 'axios'
import 'element-plus/dist/index.css'
//引入路由
import {router} from '../router/index'
// 引入 md编辑器
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});
VMdPreview.use(vuepressTheme, {
  Prism,
});
// use
const app = createApp(App)
app.config.globalProperties.axios = axios
app.use(ElementPlus)
app.use(router)
app.use(VueMarkdownEditor)
app.use(VMdPreview)
app.mount('#app')
