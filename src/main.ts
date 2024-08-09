import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router';

import './assets/iconfont/iconfont.css' 
import './assets/css/index.css';

import highlight from './highlight';
import * as echarts from 'echarts';

const app = createApp(App)

app.directive('highlight', highlight)
app.use(store).use(router).mount('#app')
