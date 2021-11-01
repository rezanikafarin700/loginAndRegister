import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path : '/',
      name : 'layout',
      component : () => import('./views/layout'),
      children : [
        {
          path: '',
          name: 'index',
          component: () => import('./views/index')
        },
        {
          path: 'panel',
          name: 'panel',
          component: () => import('./views/panel')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('./views/Register.vue')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('./views/Login.vue')
        },
    
      ]
      
    },
  ]
})
