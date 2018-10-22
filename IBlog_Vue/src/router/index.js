import Vue from 'vue'
import Router from 'vue-router'
import Vmain from '@/components/Vmain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vmain',
      component: Vmain
    }
  ]
})
