<template>
  <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl">
    <div class="flex items-center justify-between px-8 py-4 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full shadow-2xl">
      <div class="flex gap-8 font-black uppercase tracking-[0.3em] text-[10px]">
        <router-link to="/" class="hover:text-purple-500 transition-colors">Profile</router-link>
        <router-link to="/guestbook" class="hover:text-purple-500 transition-colors">Guestbook</router-link>
      </div>
      
      <span class="text-xs font-black tracking-tighter">ZEIRII_</span>

      <ThemeSwitcher />
    </div>
  </nav>
</template>