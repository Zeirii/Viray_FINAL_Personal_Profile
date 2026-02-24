<template>
  <div v-if="active" class="fixed inset-0 z-[9999] pointer-events-none bg-black/80 flex items-center justify-center">
    <div class="text-purple-500 font-mono text-xs md:text-sm animate-pulse text-center">
      <p class="mb-2">>> ACCESS GRANTED: ZEIRII_LEVEL_OVERRIDE</p>
      <p class="opacity-50">BYPASSING SECURITY PROTOCOLS...</p>
    </div>
    <div class="absolute inset-0 overflow-hidden">
      <div v-for="i in 10" :key="i" class="glitch-line"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({ active: Boolean })
</script>

<style scoped>
.glitch-line {
  position: absolute;
  width: 100%;
  height: 2px;
  background: rgba(168, 85, 247, 0.5);
  top: v-bind('Math.random() * 100 + "%"');
  animation: glitch-anim 0.2s infinite;
}

@keyframes glitch-anim {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>