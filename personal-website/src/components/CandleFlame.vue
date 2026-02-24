<template>
  <div class="candle-container relative w-8 h-24">
    <div class="flame absolute bottom-12 left-1/2 -translate-x-1/2">
      <div class="flame-main animate-flicker"></div>
      <div class="flame-glow"></div>
    </div>
    <div class="w-4 h-16 bg-zinc-200 dark:bg-zinc-800 rounded-t-sm mx-auto shadow-inner"></div>
  </div>
</template>

<style scoped>
.flame-main {
  width: 16px;
  height: 26px;
  background: linear-gradient(to bottom, transparent 0%, #8b5cf6 20%, #fef3c7 90%);
  border-radius: 50% 50% 20% 20%;
  filter: blur(1px);
  position: relative;
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.4);
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
  filter: blur(5px);
}

@keyframes flicker {
  0%, 100% { transform: scale(1) rotate(-1deg); opacity: 0.9; }
  20% { transform: scale(1.1, 0.9) rotate(1deg); opacity: 1; }
  40% { transform: scale(0.9, 1.1) rotate(-2deg); opacity: 0.8; }
  60% { transform: scale(1.05) rotate(2deg); opacity: 1; }
  80% { transform: scale(0.95) rotate(-1deg); opacity: 0.9; }
}

.animate-flicker {
  animation: flicker 0.15s ease-in-out infinite;
}
</style>