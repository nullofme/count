// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex';
Vue.config.productionTip = false
Vue.use(Vuex);
const state = { count: 0 }
const mutations = {
  add(state, m) {
    state.count += m
  },
  minus(state) {
   state.count-=1
  }
}
//只有一个仓库
const store = new Vuex.Store({
  state, 
  mutations//不支持异步
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,//store被注册到实例上，所有的组件都会有this.$store的属性
  mutations,
  components: { App },
  template: '<App/>'
})
