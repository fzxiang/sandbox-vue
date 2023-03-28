import { createApp } from 'vue'
import App from './App.vue'
import '@fzxiang/layui-vue/lib/index.css'
import Layui from '@fzxiang/layui-vue'

const app = createApp(App)

app.use(Layui).mount('#app')
