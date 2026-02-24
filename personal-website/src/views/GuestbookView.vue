<template>
  <div id="top" class="animate-fade-in selection:bg-purple-500/30 relative text-zinc-900 dark:text-white transition-colors duration-500">
    
    <section class="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      <div 
        class="w-full h-full bg-cover bg-center transition-transform duration-[3000ms] hover:scale-110" 
        style="background-image: url('/keqing.gif'); background-position: center 20%;"
      ></div>
      
      <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0c10] via-transparent to-black/20 flex items-end">
        <div class="max-w-7xl mx-auto w-full px-6 pb-12">
          <h1 class="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-4 drop-shadow-sm">
            Guestbook
          </h1>
          <div class="flex items-center gap-4">
            <span class="px-4 py-1.5 bg-purple-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
              Digital Signature ✍️
            </span>
            <p class="text-xl font-medium text-zinc-500 italic font-serif">Leave a mark on my digital space</p>
          </div>
        </div>
      </div>
    </section>

    <main class="max-w-7xl mx-auto px-6 py-24 lg:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        <aside class="lg:col-span-4 space-y-12">
          <div class="lg:sticky lg:top-32 flex flex-col items-start">
            
            <div class="candle-container relative w-8 h-24 mb-8">
              <div class="flame absolute bottom-12 left-1/2 -translate-x-1/2">
                <div class="flame-main animate-flicker"></div>
                <div class="flame-glow"></div>
              </div>
              <div class="w-4 h-16 bg-zinc-200 dark:bg-zinc-800 rounded-t-sm mx-auto shadow-inner"></div>
            </div>

            <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-purple-500 mb-8">Identity & Trace</h2>
            
            <div class="pl-6 border-l-4 border-purple-500/30 hover:border-purple-500 transition-all duration-500 group">
              <p class="text-2xl font-medium leading-tight tracking-tight text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors">
                If we have met in <span class="text-purple-500 font-bold">Discord</span>, <span class="text-purple-500 font-bold">IRL</span>, <span class="text-purple-500 font-bold">School</span>, or in <span class="text-purple-500 font-bold">events</span>, feel free to leave a message—it will be permanently here.
              </p>
            </div>

            <div class="pt-12 mt-12 border-t border-zinc-100 dark:border-zinc-800">
              <p class="text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-relaxed">
                Vault Status: Secured // Supabase Active
              </p>
            </div>
          </div>
        </aside>

        <div class="lg:col-span-8 space-y-32">
          
          <form @submit.prevent="submitMessage" class="space-y-12 p-10 bg-zinc-50 dark:bg-zinc-900/50 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 shadow-sm transition-all hover:shadow-2xl">
            <div class="space-y-4">
              <label class="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Identity</label>
              <input 
                v-model="form.name" 
                type="text" 
                required 
                class="w-full bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 py-4 text-2xl font-bold focus:border-purple-500 outline-none transition-all placeholder:opacity-30"
                placeholder="What's your name?"
              />
            </div>
            <div class="space-y-4">
              <label class="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Message</label>
              <textarea 
                v-model="form.message" 
                rows="3" 
                required 
                class="w-full bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 py-4 text-2xl font-bold focus:border-purple-500 outline-none transition-all resize-none placeholder:opacity-30"
                placeholder="Say something meaningful..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="group relative w-full py-6 bg-purple-600 text-white rounded-3xl font-black uppercase tracking-[0.2em] text-xs hover:bg-purple-700 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50 overflow-hidden"
            >
              <span class="relative z-10">{{ isSubmitting ? 'Syncing...' : 'Sign Guestbook' }}</span>
              <div class="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </form>

          <div class="space-y-16">
            <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">The Chronicle</h2>
            
            <div v-if="isLoading" class="space-y-8">
              <div v-for="i in 3" :key="i" class="h-32 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl animate-pulse"></div>
            </div>

            <div v-else class="space-y-16">
              <div 
                v-for="msg in messages" 
                :key="msg.id" 
                class="group relative pl-8 border-l-2 border-zinc-100 dark:border-zinc-800 hover:border-purple-500 transition-all pb-4"
              >
                <div class="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
                  <span class="text-3xl font-black tracking-tight group-hover:text-purple-500 transition-colors">
                    {{ msg.name }}
                  </span>
                  <span class="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    Entry // {{ new Date(msg.created_at).toLocaleDateString() }}
                  </span>
                </div>
                <p class="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                  {{ msg.message }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Transition name="fade">
      <a v-show="showScrollButton" href="#top" class="fixed bottom-10 right-10 z-[100] h-14 w-14 bg-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { supabase } from '../supabase'

const messages = ref([])
const form = ref({ name: '', message: '' })
const isLoading = ref(true)
const isSubmitting = ref(false)
const showScrollButton = ref(false)

const handleScroll = () => { showScrollButton.value = window.scrollY > 400 }

const fetchMessages = async () => {
  try {
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) throw error
    messages.value = data
  } catch (e) {
    console.error(e.message)
  } finally {
    isLoading.value = false
  }
}

const submitMessage = async () => {
  if (isSubmitting.value) return
  isSubmitting.value = true
  try {
    const { error } = await supabase
      .from('guestbook')
      .insert([{ name: form.name, message: form.message }])
    if (error) throw error
    form.value = { name: '', message: '' }
    await fetchMessages()
  } catch (e) {
    alert("Error: " + e.message)
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  fetchMessages()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* FLAME ANIMATIONS */
.flame-main {
  width: 14px; height: 24px;
  background: linear-gradient(to bottom, transparent 0%, #8b5cf6 20%, #fef3c7 90%);
  border-radius: 50% 50% 20% 20%;
  filter: blur(0.5px); position: relative;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
}
.flame-glow {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 40px; height: 40px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
  border-radius: 50%; filter: blur(8px);
}
@keyframes flicker {
  0%, 100% { transform: scale(1) rotate(-1deg); opacity: 0.9; }
  20% { transform: scale(1.1, 0.9) rotate(1deg); opacity: 1; }
  40% { transform: scale(0.9, 1.1) rotate(-2deg); opacity: 0.8; }
  60% { transform: scale(1.05) rotate(2deg); opacity: 1; }
  80% { transform: scale(0.95) rotate(-1deg); opacity: 0.9; }
}
.animate-flicker { animation: flicker 0.15s ease-in-out infinite; }

/* TRANSITIONS */
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease, transform 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(20px); }
</style>