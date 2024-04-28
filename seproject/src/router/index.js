import DetailPage from '@/views/DetailPage.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { component } from 'vue/types/umd'
Vue.use(VueRouter)

const routes = [

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/detail',
    name: 'DetailPage',
    component: DetailPage
  }
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
