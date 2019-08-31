// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import UserLogin from '@/pages/center/UserLogin'
import UserHome from '@/pages/center/UserHome'
import HelloWorld from '@/components/HelloWorld'

Vue.config.productionTip = false

import axios from 'axios'   //引入axios

var service=axios.create({
  baseURL:"http://localhost:8888"
})

//将axios注册为全局变量
Vue.prototype.service=service

import {store} from './store/index'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
    //components: {App,HelloWorld},
    // template: '<HelloWorld/>'
})
