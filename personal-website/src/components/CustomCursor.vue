<template>
  <div 
    class="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
    :style="{ transform: `translate3d(${pos.x - 16}px, ${pos.y - 16}px, 0)` }"
  >
    <div class="w-full h-full bg-purple-500/40 rounded-full blur-md animate-pulse"></div>
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, onUnmounted } from 'vue'

const pos = reactive({ x: 0, y: 0 })
const updatePos = (e) => {
  pos.x = e.clientX
  pos.y = e.clientY
}

onMounted(() => window.addEventListener('mousemove', updatePos))
onUnmounted(() => window.removeEventListener('mousemove', updatePos))
</script>