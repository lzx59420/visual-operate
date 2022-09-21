import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import App from './App.vue'
import router from './router'
import FirstComp from './virtualLib/FirstComp.vue'
import FirstCompAttr from './virtualLib/FirstCompAttr.vue'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router).use(Antd)

app.component('FirstComp',FirstComp)
app.component('FirstCompAttr',FirstCompAttr)

app.mount('#app')
