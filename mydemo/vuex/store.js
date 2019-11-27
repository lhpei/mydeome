import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    count:0,
    modifyTips:'',
    weizhi:''
  },
  mutations: {
    modi(state,msg) {
      state.weizhi ='';
      state.weizhi = msg;      
    },
    modifyLocation(state,msg) {
        state.modifyTips =[];
        state.modifyTips = msg;      
      }
  }

})

export default store;