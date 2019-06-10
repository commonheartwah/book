import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'
Vue.use(vuex);
const state={
  count:0
};
const mutations={
  add(state){
    state.count++
  }
};
let store=new Vuex.store({
  state,
  strict:true,//只能通过mutation(管理员)来更改状态
});
new Vue({
  el:'#app',
  ...App,
  store,
  mutations
});
