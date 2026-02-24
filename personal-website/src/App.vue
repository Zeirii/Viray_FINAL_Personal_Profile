<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { RouterLink, RouterView } from 'vue-router'

// This automatically handles adding/removing the 'dark' class on your HTML tag
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
    <header class="p-4 shadow-sm sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <nav class="max-w-4xl mx-auto flex justify-between items-center">
        <div class="space-x-6 text-lg font-bold tracking-wide">
          <RouterLink to="/" class="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Profile</RouterLink>
          <RouterLink to="/guestbook" class="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Guestbook</RouterLink>
        </div>
        
        <button @click="toggleDark()" class="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-transparent dark:border-gray-700 shadow-sm flex items-center">
          {{ isDark ? '🌙 Dark' : '☀️ Light' }}
        </button>
      </nav>
    </header>

    <main class="max-w-4xl mx-auto p-6 relative mt-4">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
  </div>
</template>

<style>
/* Smooth Page Transition Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(15px);
}
</style>