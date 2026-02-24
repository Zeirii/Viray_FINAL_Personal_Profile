<template>
  <Transition name="fade-overlay">
    <div v-if="isLoading" class="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-white dark:bg-[#0a0c10] px-6">
      
      <div v-if="!isReadyToEnter" class="flex flex-col items-center animate-fade-in">
        <div class="relative group mb-8">
          <div class="absolute -inset-4 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <img 
            src="/catoicon.jpg" 
            class="relative w-24 h-24 rounded-full border-2 border-purple-500 shadow-2xl animate-spin-slow"
          />
        </div>
        <p class="text-[10px] font-black uppercase tracking-[0.5em] text-purple-500 animate-pulse">
          Initializing Digital Space
        </p>
      </div>

      <div v-else class="text-center space-y-10 animate-reveal flex flex-col items-center">
        
        <div class="candle-container relative w-8 h-24 mb-[-2rem]">
          <div class="flame absolute bottom-12 left-1/2 -translate-x-1/2">
            <div class="flame-main animate-flicker"></div>
            <div class="flame-glow"></div>
          </div>
          <div class="w-4 h-16 bg-zinc-200 dark:bg-zinc-800 rounded-t-sm mx-auto shadow-inner"></div>
        </div>

        <div class="space-y-4">
          <h2 class="text-[10px] font-black uppercase tracking-[0.6em] text-purple-500">Invitation</h2>
          <h1 class="text-4xl md:text-6xl font-serif italic text-zinc-800 dark:text-zinc-100 tracking-tighter">
            Welcome, Soul of Celestia
          </h1>
        </div>

        <button 
          @click="handleEntryClick"
          class="group relative px-12 py-4 bg-transparent border border-purple-500/30 overflow-hidden rounded-full transition-all duration-500 hover:border-purple-500 hover:scale-105 active:scale-95"
        >
          <span class="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-purple-500 group-hover:text-white transition-colors duration-500">
            Enter the Depths
          </span>
          <div class="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </button>
      </div>

      <audio ref="audioPlayer" src="/rescopicsound-elemental-magic-spell-impact-outgoing-228342.mp3" preload="auto"></audio>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  isLoading: Boolean
})

const emit = defineEmits(['enter'])
const isReadyToEnter = ref(false)
const audioPlayer = ref(null)

const handleEntryClick = () => {
  if (audioPlayer.value) {
    audioPlayer.value.volume = 0.10; 
    audioPlayer.value.play();
  }
  emit('enter')
}

onMounted(() => {
  setTimeout(() => {
    isReadyToEnter.value = true
  }, 2500)
})
</script>

<style scoped>
/* Animations for Icon and Reveal */
.animate-spin-slow { animation: spin 4s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.animate-reveal { animation: reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
@keyframes reveal {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Candle Flame Styles */
.flame-main {
  width: 14px;
  height: 24px;
  background: linear-gradient(to bottom, transparent 0%, #8b5cf6 20%, #fef3c7 90%);
  border-radius: 50% 50% 20% 20%;
  filter: blur(0.5px);
  position: relative;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
}

.flame-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(8px);
}

@keyframes flicker {
  0%, 100% { transform: scale(1) rotate(-1deg); opacity: 0.9; }
  20% { transform: scale(1.1, 0.9) rotate(1deg); opacity: 1; }
  40% { transform: scale(0.9, 1.1) rotate(-2deg); opacity: 0.8; }
  60% { transform: scale(1.05) rotate(2deg); opacity: 1; }
  80% { transform: scale(0.95) rotate(-1deg); opacity: 0.9; }
}

.animate-flicker { animation: flicker 0.15s ease-in-out infinite; }

/* Cinematic Blurred Exit */
.fade-overlay-leave-active { transition: all 1s cubic-bezier(0.7, 0, 0.3, 1); }
.fade-overlay-leave-to { opacity: 0; transform: scale(1.1); filter: blur(20px); }
</style>