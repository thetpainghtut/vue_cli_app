import Vue from 'vue'
import VueRouter from 'vue-router'

import Testing from '@/components/Testing'
import Item from '@/components/Item'
import ItemDetail from '@/components/ItemDetail'
import ShoppingCart from '@/components/ShoppingCart'


// Vue Router
Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'testing',
      component: Testing
    },
    {
      path: '/item',
      name: 'item',
      component: Item
    },
    {
      path: '/item/:id',
      name: 'detail',
      component: ItemDetail
    },
    {
      path: '/cart',
      name: 'cart',
      component: ShoppingCart
    }
  ],
  mode: 'abstract'
})
export default router