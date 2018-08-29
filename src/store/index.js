import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = { count: 0 }
import mutations from './mutations';
import getters from './getters'
//只有一个仓库
const store = new Vuex.Store({
  state, //状态对象，相当于data
  mutations,//不支持异步,相当于methods
  getters//计算属性，相当有computed
})

export default store;