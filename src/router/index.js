import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'VIEW/hello'
import Index from 'VIEW/index'
import VueRef from 'VIEW/ref'
import Css01 from 'VIEW/css01'
import Sfy from 'VIEW/suanggeiyi'
import Sb from 'VIEW/shenbei'
import Sb02 from 'VIEW/sb02'
import Fx01 from 'VIEW/flex01'
import Abs01 from 'VIEW/abs01'
import Fx02 from 'VIEW/flex02'
import Gr01 from 'VIEW/grid01'
import List01 from 'VIEW/list01'

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
    },
    {
      path: '/Css01',
      name: 'Css01',
      component: Css01
    },
    {
      path: '/Sfy01',
      name: 'Sfy01',
      component: Sfy
    },
    {
      path: '/Sb01',
      name: 'Sb01',
      component: Sb
    },
    {
      path: '/Sb02',
      name: 'Sb02',
      component: Sb02
    },
    {
      path: '/Fx01',
      name: 'Fx01',
      component: Fx01
    },
    {
      path: '/Abs01',
      name: 'Abs01',
      component: Abs01
    },
    {
      path: '/Fx02',
      name: 'Fx02',
      component: Fx02
    },
    {
      path: '/Gr01',
      name: 'Gr01',
      component: Gr01
    },
    {
      path: '/List01',
      name: 'List01',
      component: List01
    }
  ]
})
