// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//将图标库引入
import "@/assets/image/icon/iconfont"
//将全局样式引入
import "@/assets/style/index"
Vue.config.productionTip = false
import store from "@/store"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
