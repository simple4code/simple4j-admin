import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
/* Layout */
import Layout from '@/layout'
/**
 * constantRoutes
 * a base page that does not have permission requirements
 * 所有角色可以访问
 */
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard', children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const createRouter = () => new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()
export default router
