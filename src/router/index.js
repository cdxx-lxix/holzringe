import { createRouter, createWebHistory } from 'vue-router'
import HomeViewVue from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import(/* webpackChunkName: "Gallery" */ '@/views/GalleryView.vue')
    },
    {
      path: '/benefits',
      name: 'benefits',
      component: () => import(/* webpackChunkName: "Benefits" */ '@/views/BenefitsView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import(/* webpackChunkName: "Contacts" */ '@/views/ContactsView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import(/* webpackChunkName: "404" */ '@/views/NotFound.vue')
    }
  ]
})

export default router
