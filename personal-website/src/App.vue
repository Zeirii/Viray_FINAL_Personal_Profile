<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { RouterLink, RouterView } from 'vue-router'
import LoadingScreen from './components/LoadingScreen.vue'
import CustomCursor from './components/CustomCursor.vue'
import GlitchEffect from './components/GlitchEffect.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const isLoading = ref(true)
const status = "Dating someone already" //

// SECRET KEY LOGIC
const secretWord = "zeirii"
let inputSequence = ""
const isGlitching = ref(false)

const handleKeyDown = (e) => {
  inputSequence += e.key.toLowerCase()
  if (inputSequence.includes(secretWord)) {
    triggerGlitch()
    inputSequence = ""
  }
  if (inputSequence.length > 20) inputSequence = ""
}

const triggerGlitch = () => {
  isGlitching.value = true
  setTimeout(() => isGlitching.value = false, 3000)
}

const handleEntry = () => {
  isLoading.value = false
}

onMounted(() => window.addEventListener('keydown', handleKeyDown))
onUnmounted(() => window.removeEventListener('keydown', handleKeyDown))
</script>

<template>
  <div class="min-h-screen transition-colors duration-500 bg-white dark:bg-[#0a0c10] text-gray-900 dark:text-gray-100 font-sans overflow-x-hidden">
    
    <GlitchEffect :active="isGlitching" />
    <CustomCursor v-if="!isLoading" />
    <LoadingScreen :isLoading="isLoading" @enter="handleEntry" />

    <div v-show="!isLoading" class="animate-fade-in flex flex-col min-h-screen">
      <header class="p-4 shadow-sm sticky top-0 z-50 bg-white/80 dark:bg-[#0a0c10]/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800">
        <nav class="max-w-7xl mx-auto flex justify-between items-center px-6">
          <div class="flex space-x-10 text-lg font-bold tracking-wide">
            <RouterLink 
              v-for="link in [{to: '/', label: 'Profile'}, {to: '/guestbook', label: 'Guestbook'}]"
              :key="link.to" :to="link.to" 
              class="group relative py-2 transition-colors duration-300 hover:text-purple-600 dark:hover:text-purple-400"
              active-class="text-purple-600 dark:text-purple-400 is-active"
            >
              {{ link.label }}
              <span class="absolute bottom-0 left-0 h-1 bg-purple-500 transition-all duration-300 w-0 group-hover:w-full group-[.is-active]:w-full group-[.is-active]:h-[4px] group-[.is-active]:bg-purple-600"></span>
            </RouterLink>
          </div>
          <button @click="toggleDark()" class="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-zinc-200 dark:border-zinc-700 shadow-sm">
            {{ isDark ? '🌙 Dark' : '☀️ Light' }}
          </button>
        </nav>
      </header>

      <main class="w-full relative mt-4 flex-grow">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </main>

      <footer class="mt-auto py-6 border-t border-zinc-100 dark:border-zinc-900 overflow-hidden bg-zinc-50/50 dark:bg-black/20">
        <div class="flex whitespace-nowrap animate-marquee gap-12">
          <div v-for="i in 2" :key="i" class="flex gap-12 items-center">
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              <span class="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400">
                System: Secured // JISSA-APC Node: Active // Protocol: AES-256-GCM
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(15px); }
.animate-fade-in { animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
@keyframes fadeIn { from { opacity: 0; transform: scale(0.99); } to { opacity: 1; transform: scale(1); } }
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.animate-marquee { animation: marquee 40s linear infinite; width: max-content; }
</style>