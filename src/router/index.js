import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserLogin from '@/pages/center/UserLogin'
import UserRegister from '@/pages/center/UserRegister'
import App from '../App'


import UserHome from '@/pages/center/UserHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/userhome',
      name: 'UserHome',
      component: UserHome
    },
    {
      path: '/login',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path: '/register',
      name: 'UserRegister',
      component: UserRegister
    }
  ]
})
