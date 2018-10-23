import Vue from 'vue'
import Router from 'vue-router'
import Vmain from '@/components/Vmain'
import Varticles from '@/components/Varticles'
import Vnote from '@/components/Vnote'
import Vshare from '@/components/Vshare'
import Vlink from '@/components/Vlink'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vmain',
      component: Vmain
    },
    {
      path: '/articles',
      name: 'Varticles',
      component: Varticles
    },
    {
      path: '/note',
      name: 'Vnote',
      component: Vnote
    },
    {
      path: '/share',
      name: 'Vshare',
      component: Vshare
    },
    {
      path: '/link',
      name: 'Vlink',
      component: Vlink
    }
  ]
})
