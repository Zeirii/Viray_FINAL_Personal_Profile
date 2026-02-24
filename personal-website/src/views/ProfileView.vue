<template>
  <div id="top" class="animate-fade-in selection:bg-purple-500/30 relative">
    
    <section class="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      <div 
        class="w-full h-full bg-cover bg-center transition-transform duration-[2000ms] hover:scale-105" 
        style="background-image: url('/castorice.gif'); background-position: center 30%;"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0c10] via-transparent to-transparent flex items-end">
        <div class="max-w-7xl mx-auto w-full px-6 pb-12">
          <h1 class="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-4 text-zinc-900 dark:text-white">
            Kristoff <br class="hidden md:block"/> Aadryk Viray
          </h1>
          <div class="flex flex-wrap items-center gap-4">
            <span class="px-4 py-1.5 bg-purple-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
              Status: {{ status }} 💘
            </span>
            <p class="text-xl font-medium text-zinc-500 italic font-serif">Antipolo, Philippines</p>
            
            <a href="#connect" class="px-6 py-2 bg-white dark:bg-zinc-800 text-purple-600 dark:text-purple-400 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg hover:scale-110 transition-transform active:scale-95 border border-purple-100 dark:border-zinc-700">
              Connect Now
            </a>
          </div>
        </div>
      </div>
    </section>

    <main class="max-w-7xl mx-auto px-6 py-24 space-y-32">
      
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-5">
          <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-purple-500 mb-8">Narrative</h2>
          <p class="text-3xl md:text-4xl font-medium leading-tight tracking-tight text-zinc-800 dark:text-zinc-200">
            A 20-year-old, 2nd year Computer Science Student specializing in <span class="underline decoration-purple-500 decoration-4 underline-offset-8">Security and Forensics</span>. I thrive on Discord, scenery, and the tactile feel of mechanical keyboards.
          </p>
        </div>
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div v-for="milestone in milestones" :key="milestone.title" 
            class="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-100 dark:border-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-purple-500/50 cursor-default">
            <span class="text-[10px] font-mono text-purple-500 mb-4 block">{{ milestone.tag }}</span>
            <h3 class="text-xl font-bold mb-2 text-zinc-900 dark:text-white">{{ milestone.title }}</h3>
            <p class="text-zinc-500 text-sm leading-relaxed">{{ milestone.org }}</p>
          </div>
        </div>
      </section>

      <section class="py-24 border-y border-zinc-100 dark:border-zinc-900 overflow-hidden">
        <div class="max-w-4xl mx-auto text-center">
          <span class="text-[10px] font-black uppercase tracking-[0.5em] text-purple-500 mb-12 block">Philosophy</span>
          <blockquote class="text-4xl md:text-6xl font-serif italic leading-tight tracking-tight text-zinc-800 dark:text-zinc-100">
            "{{ quote }}"
          </blockquote>
        </div>
      </section>

      <section class="py-20 text-center text-zinc-900 dark:text-white">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-12">Tech Confidence</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          <div v-for="skill in [...programmingSkills, ...appSkills]" :key="skill.name" class="group">
            <div class="text-3xl font-black mb-1 group-hover:text-purple-500 transition-colors">{{ skill.level }}%</div>
            <div class="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{{ skill.name }}</div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-purple-500 mb-10">Developer Toolkit</h2>
        <div class="flex flex-wrap gap-4 text-zinc-900 dark:text-white">
          <div v-for="tool in sortedTools" :key="tool" 
            class="px-6 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl text-sm font-bold tracking-tight hover:border-purple-500 transition-all cursor-default">
            {{ tool }}
          </div>
        </div>
      </section>

      <section>
        <div class="flex justify-between items-end mb-12">
          <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Visual Documentation</h2>
          <div class="h-px flex-grow mx-8 bg-zinc-100 dark:bg-zinc-900"></div>
          <span class="text-[10px] font-mono text-zinc-400">01 — 06</span>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div v-for="img in galleryImages" :key="img" @click="selectedImage = img" 
            class="aspect-[4/5] overflow-hidden rounded-xl cursor-pointer bg-zinc-100 dark:bg-zinc-900 group">
            <img :src="`/gallery/${img}`" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
          </div>
        </div>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-3 gap-16 pt-20 border-t border-zinc-100 dark:border-zinc-900 text-zinc-900 dark:text-white">
        <div class="space-y-8">
          <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-purple-500">Game Library</h2>
          <ul class="space-y-3">
            <li v-for="game in sortedGames" :key="game" class="text-lg font-medium opacity-60 hover:opacity-100 transition-opacity">
              {{ game }}
            </li>
          </ul>
        </div>
        <div class="space-y-8 md:col-span-2">
          <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-purple-500">Future Roadmap</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="goal in futureGoals" :key="goal.text" class="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-white dark:hover:bg-zinc-800 cursor-default text-zinc-900 dark:text-white">
              <span class="text-2xl">{{ goal.emoji }}</span>
              <span class="text-sm font-bold">{{ goal.text }}</span>
            </div>
          </div>
        </div>
      </section>

      <footer id="connect" class="pt-32 pb-16 border-t border-zinc-100 dark:border-zinc-900 text-center text-zinc-900 dark:text-white">
        <h2 class="text-5xl md:text-8xl font-black tracking-tighter mb-12">Let's connect.</h2>
        <div class="flex flex-wrap justify-center gap-x-12 gap-y-6 text-lg font-bold uppercase tracking-widest">
          <a href="https://www.linkedin.com/in/kristoff-aadryk-viray/" target="_blank" class="hover:text-purple-500 transition-colors underline decoration-2 underline-offset-8">LinkedIn</a>
          <a href="https://www.facebook.com/Kristoff.Viray.5/" target="_blank" class="hover:text-purple-500 transition-colors underline decoration-2 underline-offset-8">Facebook</a>
          <a href="https://www.instagram.com/zeirii_/" target="_blank" class="hover:text-purple-500 transition-colors underline decoration-2 underline-offset-8">Instagram</a>
          <a href="mailto:klviray@student.apc.edu.ph" class="hover:text-purple-500 transition-colors underline decoration-2 underline-offset-8">Email</a>
        </div>
        <p class="mt-24 text-[10px] text-zinc-400 font-black uppercase tracking-[0.5em]">© 2026 • ZEIRII_</p>
      </footer>
    </main>

    <Transition name="fade">
      <a 
        v-show="showScrollButton"
        href="#top" 
        class="fixed bottom-10 right-10 z-[100] h-14 w-14 bg-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Back to Top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </Transition>

    <div v-if="selectedImage" class="fixed inset-0 z-[100] bg-white/95 dark:bg-black/98 backdrop-blur-3xl flex items-center justify-center p-8 lg:p-24" @click="selectedImage = null">
      <img :src="`/gallery/${selectedImage}`" class="max-w-full max-h-full rounded-3xl shadow-2xl animate-zoom-in" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const status = "Dating someone already"
const selectedImage = ref(null)
const quote = "ʏᴏᴜ ᴀʀᴇ ᴛʜᴇ ᴠɪʟʟᴀɪɴ ᴏꜰ ʏᴏᴜʀ ᴏᴡɴ ꜱᴛᴏʀʏ ꜱᴏ ᴡᴀᴋᴇ ᴜᴘ"
const galleryImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.png']

// SCROLL LOGIC
const showScrollButton = ref(false)
const handleScroll = () => { showScrollButton.value = window.scrollY > 500 }
onMounted(() => { window.addEventListener('scroll', handleScroll) })
onUnmounted(() => { window.removeEventListener('scroll', handleScroll) })

const milestones = [
  { tag: 'LEADERSHIP (ELECT)', title: 'Future VP Internal', org: 'JISSA-APC (2026-2027)' },
  { tag: 'LEADERSHIP', title: 'Assistant Director of Marketing', org: 'JISSA-APC & JPCS-APC' },
  { tag: 'SECURITY', title: 'UCTF Participant', org: 'Participated in 2 Trend Micro Capture The Flag events.' },
  { tag: 'CERTIFICATION', title: 'Red Cross Swim Instructor', org: 'Teaching lifesaving training and water safety to others through the Red Cross.' },
  { tag: 'ACADEMIC', title: 'High Honors', org: 'Grade 12 Graduation with Academic Distinction.' },
  { tag: 'COMMUNITY', title: 'Youngest 1-Miler', org: 'Youngest participant for Red Cross Marikina Chapter at age 6.' }
]

const programmingSkills = [
  { name: 'Terminal', level: 85 }, { name: 'HTML', level: 80 }, { name: 'CSS', level: 80 }, { name: 'Python', level: 60 }, { name: 'JAVA', level: 50 }
]
const appSkills = [
  { name: 'Canva', level: 85 }, { name: 'CapCut', level: 65 }
]

const rawGames = [
  'Genshin Impact', 'Honkai Star Rail', 'Wuthering Waves', 'Zenless Zone Zero',
  'Warhammer: Darktide', 'Minecraft', 'Dota 2', 'Valorant', 'Arknights Endfeild', 'League of Legends'
]
const sortedGames = computed(() => [...rawGames].sort((a, b) => a.localeCompare(b)))

const developerTools = [
  'Oracle Virtual Box', 'Terminal', 'Visual Studio Code', 'GitHub', 
  'Copilot', 'Gemini', 'Perplexity', 'MySQL', 'Supabase', 'React'
]
const sortedTools = computed(() => [...developerTools].sort((a, b) => a.localeCompare(b)))

const futureGoals = [
  { emoji: '💼', text: 'High-paying tech career' },
  { emoji: '🏠', text: 'Buy a 1M worth house' },
  { emoji: '🏎️', text: 'BMW M4 Competition' },
  { emoji: '🛠️', text: 'Renovate parents’ house' },
  { emoji: '👨‍👩‍👧‍👦', text: 'Prepare for future wife & kids' }
]
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease, transform 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(20px); }
</style>