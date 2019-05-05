import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DetailResto from './views/DetailResto.vue'
import DetailFood from './views/DetailFood.vue'
import AboutFood from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/resto/:restoId',
      name: 'detail-resto',
      component: DetailResto
    },
    {
      path: '/food/:foodId',
      name: 'detail-food',
      component: DetailFood
    },
    {
      path: '/about',
      name: 'about',
      component: AboutFood
    }
  ]
})
