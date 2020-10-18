import Vue from 'vue'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import '@/theme/index.css'

import '@/styles/index.scss' // 全局 css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control


Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
