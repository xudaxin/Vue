import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

//vuex全局注册
Vue.use(Vuex)

const state={
  //保存用户信息
  userInfo:{

    username:"zs",
  }


}

//创建vuex实例

export const store=new Vuex.Store({
  state,
  getters,
  actions,
  mutations


})
