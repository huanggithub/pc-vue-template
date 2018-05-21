// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import store from './store'
import i18n from './i18n/i18n';

import 'assets/css/index.scss'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false


Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
