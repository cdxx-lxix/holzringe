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
      component: () => import('@/views/GalleryView.vue')
    },
    {
      path: '/benefits',
      name: 'benefits',
      component: () => import('@/views/BenefitsView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/views/ContactsView.vue')
    }
  ]
})

export default router
