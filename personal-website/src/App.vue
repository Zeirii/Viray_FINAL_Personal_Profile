<script setup>
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { RouterLink, RouterView } from 'vue-router'
import LoadingScreen from './components/LoadingScreen.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

// The site stays in "loading" mode until the user clicks the button
const isLoading = ref(true)

const handleEntry = () => {
  isLoading.value = false
}
</script>

<template>
  <div class="min-h-screen transition-colors duration-500 bg-white dark:bg-[#0a0c10] text-gray-900 dark:text-gray-100 font-sans">
    
    <LoadingScreen :isLoading="isLoading" @enter="handleEntry" />

    <div v-show="!isLoading" class="animate-fade-in">
      <header class="p-4 shadow-sm sticky top-0 z-50 bg-white/80 dark:bg-[#0a0c10]/80 backdrop-blur-md">
        </header>

      <main class="max-w-4xl mx-auto p-6 relative mt-4">
        <RouterView />
      </main>
    </div>
  </div>
</template>