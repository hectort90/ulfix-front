import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "about" */ '../views/Users.vue')
  },
  {
    path: '/EditUser',
    name: 'EditUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditUser.vue')
  },
  {
    path: '/AddUser',
    name: 'AddUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddUser.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
