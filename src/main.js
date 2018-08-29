// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,//store被注册到实例上，所有的组件都会有this.$store的属性
  components: { App },
  template: '<App/>'
})
