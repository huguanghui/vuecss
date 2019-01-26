import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'VIEW/hello'
import Index from 'VIEW/index'
import VueRef from 'VIEW/ref'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Ref',
      name: 'VueRef',
      component: VueRef
    }
  ]
})
