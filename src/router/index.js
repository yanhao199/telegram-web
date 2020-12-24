import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/layout/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'inquire',
    component: Home,
    children: [
      {
        name: 'inquire',
        path: 'inquire',
        component: () => import('@/components/pages/Inquire.vue')
      },
      { path: '/groupchat', component: () => import('@/components/pages/Groupchat.vue') },
      {
        name: 'jointsearch',
        path: 'jointsearch',
        component: () => import('@/components/pages/jointsearch.vue')
      },
      { path: '/jointsearch', component: () => import('@/components/pages/jointsearch.vue') }
    ]
  },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') return next()
//   // 获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/login')
//   next()
// })

export default router
