import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'balance',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/incomes',
    name: 'incomes',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/expenses',
    name: 'expenses',
    component: () => import('../views/ExpensesPage.vue')
  },

  {
    path: '/checks',
    name: 'checks',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/LoginPage')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/LoginPage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
