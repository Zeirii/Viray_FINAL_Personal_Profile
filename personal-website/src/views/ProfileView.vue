<template>
  <div class="flex flex-col items-center animate-fade-in pb-12">
    <div 
      class="w-full h-80 rounded-2xl shadow-xl relative overflow-hidden flex items-center justify-center bg-cover bg-center"
      style="background-image: url('/castorice.gif');"
    >
      <div class="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-[2px]"></div>
      
      <div class="relative z-10 text-center text-white p-6 tracking-wide">
        <h1 class="text-5xl font-extrabold mb-4 drop-shadow-lg">Hello, I'm Kristoff Aadryk Viray</h1>
        <p class="text-xl font-medium drop-shadow-md border-b-2 border-purple-400 inline-block pb-1">
          2nd Year CS-SF Student | Cybersecurity & Web Dev Enthusiast
        </p>
      </div>
    </div>

    <div class="mt-10 w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      
      <div class="space-y-4 md:col-span-2 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h2 class="text-2xl font-bold border-b-2 border-purple-500 pb-2 inline-block">About Me</h2>
        <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I'm a 20-year-old 2nd-year CS-SF student living in Antipolo. I love balancing my studies with having fun on Discord with my friends. Whether I'm diving into a new game, working on creative web projects, or creating event captions, I always try to keep things interesting. 
          <br><br>
          <span class="font-semibold text-purple-600 dark:text-purple-400">Status:</span> Dating someone already 💘
        </p>
      </div>

      <div class="space-y-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
        <h2 class="text-2xl font-bold border-b-2 border-purple-500 pb-2 inline-block">Achievements</h2>
        <ul class="space-y-3 text-gray-700 dark:text-gray-300">
          <li class="flex items-start"><span class="mr-2 text-purple-500">🎓</span> Graduated Grade 12 with High Honors</li>
          <li class="flex items-start"><span class="mr-2 text-purple-500">🛡️</span> Participated in 2 CTF competitions (Trend Micro UCTF)</li>
          <li class="flex items-start"><span class="mr-2 text-purple-500">📢</span> Current Assistant Director of Marketing for JISSA-APC & JPCS-APC</li>
          <li class="flex items-start"><span class="mr-2 text-purple-500">🚀</span> Future Vice President Internal of JISSA-APC (Next Year)</li>
        </ul>
      </div>

      <div class="space-y-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
        <h2 class="text-2xl font-bold border-b-2 border-purple-500 pb-2 inline-block">Tech Confidence</h2>
        <div class="space-y-4 mt-4">
          <div v-for="skill in skills" :key="skill.name">
            <div class="flex justify-between text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">
              <span>{{ skill.name }}</span>
              <span>{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
        <div>
          <h2 class="text-2xl font-bold border-b-2 border-purple-500 pb-2 inline-block mb-4">Hobbies</h2>
          <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 marker:text-purple-500">
            <li>Gaming & Sleeping</li>
            <li>Going somewhere alone (Solo dates)</li>
            <li>Scenery viewing</li>
            <li>Keyboard enthusiast</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold border-b-2 border-purple-500 pb-1 inline-block mb-3">Games I Play</h3>
          <ul class="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Arknights: Endfield</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Dota 2</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Genshin Impact</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Honkai: Star Rail</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Minecraft</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Valorant</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Warhammer: Darktide</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Wuthering Waves</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Zenless Zone Zero</li>
          </ul>
        </div>
      </div>

      <div class="space-y-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
        <h2 class="text-2xl font-bold border-b-2 border-purple-500 pb-2 inline-block">Future Goals</h2>
        <ul class="space-y-3 text-gray-700 dark:text-gray-300">
          <li class="flex items-center"><span class="mr-3 text-xl">💼</span> Getting a job that pays good</li>
          <li class="flex items-center"><span class="mr-3 text-xl">🏠</span> Buy a 1M worth of house</li>
          <li class="flex items-center"><span class="mr-3 text-xl">🏎️</span> Buy a BMW M4 Competition</li>
          <li class="flex items-center"><span class="mr-3 text-xl">🛠️</span> Renovate my parents' house</li>
          <li class="flex items-center"><span class="mr-3 text-xl">🎁</span> Buy what my parents want</li>
          <li class="flex items-center"><span class="mr-3 text-xl">👨‍👩‍👧‍👦</span> Prepare for my future (wife & kids)</li>
          <li class="flex items-center text-purple-500 font-medium mt-4">...the rest of my goals to be added soon!</li>
        </ul>
      </div>

      <div class="md:col-span-2 bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-xl shadow-md text-white text-center space-y-6">
        <h2 class="text-3xl font-bold drop-shadow-sm">Connect With Me</h2>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="https://www.linkedin.com/in/kristoff-aadryk-viray/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-all shadow-sm hover:shadow">
            💼 LinkedIn
          </a>
          <a href="https://www.facebook.com/Kristoff.Viray.5/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-all shadow-sm hover:shadow">
            📘 Facebook
          </a>
          <a href="https://www.instagram.com/zeirii_/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-all shadow-sm hover:shadow">
            📸 Instagram
          </a>
          <a href="mailto:klviray@student.apc.edu.ph" class="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-all shadow-sm hover:shadow">
            ✉️ Email Me
          </a>
        </div>
      </div>

    </div>

    <div class="mt-16 w-full space-y-6">
      <div class="text-center">
        <h2 class="text-3xl font-bold border-b-2 border-purple-500 pb-2 inline-block mb-2">Gallery</h2>
        <p class="text-gray-600 dark:text-gray-400">A glimpse into my projects, events, and hobbies.</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mt-6">
        <div 
          v-for="(image, index) in gallery" 
          :key="index" 
          @click="openLightbox(image)"
          class="group relative overflow-hidden rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 aspect-square bg-gray-100 dark:bg-gray-800 flex items-center justify-center cursor-pointer"
        >
          <img 
            :src="image.url" 
            :alt="image.title" 
            class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out" 
          />
          
          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
            <span class="text-white font-bold tracking-wide text-lg drop-shadow-md">{{ image.title }}</span>
          </div>
        </div>
      </div>
    </div>

    <div 
      v-if="selectedImage" 
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fade-in"
      @click="closeLightbox"
    >
      <div class="relative max-w-5xl w-full flex flex-col items-center">
        <button 
          @click="closeLightbox" 
          class="absolute -top-12 right-0 md:right-4 text-white hover:text-purple-400 text-4xl font-bold transition-colors"
        >
          &times;
        </button>
        
        <img 
          :src="selectedImage.url" 
          :alt="selectedImage.title" 
          class="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
          @click.stop 
        />
        
        <div class="text-center text-white mt-6 text-2xl font-bold tracking-wide drop-shadow-md">
          {{ selectedImage.title }}
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue' 

// --- Data for the Profile ---
const skills = [
  { name: 'Terminal', level: 85 },
  { name: 'Canva', level: 85 },
  { name: 'HTML', level: 80 },
  { name: 'CSS', level: 80 },
  { name: 'CapCut', level: 65 },
  { name: 'Python', level: 60 },
  { name: 'JAVA', level: 50 },
]

const gallery = [
  { title: 'Gallery Image 1', url: '/gallery/1.jpg' },
  { title: 'Gallery Image 2', url: '/gallery/2.jpg' },
  { title: 'Gallery Image 3', url: '/gallery/3.jpg' },
  { title: 'Gallery Image 4', url: '/gallery/4.jpg' },
  { title: 'Gallery Image 5', url: '/gallery/5.jpg' },
  { title: 'Gallery Image 6', url: '/gallery/6.png' }, 
]

// --- Lightbox Logic ---
const selectedImage = ref(null) 

const openLightbox = (image) => {
  selectedImage.value = image
}

const closeLightbox = () => {
  selectedImage.value = null
}
</script>