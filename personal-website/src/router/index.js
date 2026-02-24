import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import GuestbookView from '../views/GuestbookView.vue' // Add this import

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/guestbook', // This is the URL path
      name: 'guestbook',
      component: GuestbookView // This matches your new file
    }
  ]
})

export default router