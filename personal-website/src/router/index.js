import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import GuestbookView from '../views/GuestbookView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/guestbook',
      name: 'guestbook',
      component: GuestbookView
    }
  ]
})

export default router