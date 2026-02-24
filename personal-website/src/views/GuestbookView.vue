<template>
  <div id="top" class="animate-fade-in selection:bg-purple-500/30 relative text-zinc-900 dark:text-white transition-colors duration-500 overflow-hidden">
    
    <div class="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000" :class="isInteracting ? 'opacity-100' : 'opacity-0'">
      <div class="absolute inset-0 bg-purple-500/5 animate-pulse-slow"></div>
    </div>

    <section class="relative w-full h-[50vh] md:h-[60vh] overflow-hidden z-10">
      <div class="w-full h-full bg-cover bg-center" style="background-image: url('/keqing.gif'); background-position: center 20%;"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0c10] via-transparent to-black/20 flex items-end pb-12">
        <div class="max-w-7xl mx-auto w-full px-6">
          <h1 class="text-7xl md:text-9xl font-black tracking-tighter mb-4">Guestbook</h1>
        </div>
      </div>
    </section>

    <main class="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        <aside class="lg:col-span-4 lg:sticky lg:top-32 space-y-12">
          <div class="flex flex-col items-start relative pb-20">
            <div class="candle-container relative w-8 h-24 mb-8">
              <div class="flame absolute bottom-12 left-1/2 -translate-x-1/2">
                <div class="flame-main animate-flicker"></div>
                <div class="flame-glow"></div>
              </div>
              <div class="w-4 h-16 bg-zinc-200 dark:bg-zinc-800 rounded-t-sm mx-auto shadow-inner"></div>
            </div>

            <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-purple-500 mb-8">Identity & Trace</h2>
            <div class="pl-6 border-l-4 border-purple-500/30">
              <p class="text-2xl font-medium text-zinc-500">
                If we have met in <span class="text-purple-500 font-bold">Discord</span>, <span class="text-purple-500 font-bold">IRL</span>, <span class="text-purple-500 font-bold">School</span>, or in <span class="text-purple-500 font-bold">events</span>, feel free to leave a message.
              </p>
            </div>
            
            <div class="hidden lg:block absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-[#0a0c10] to-transparent pointer-events-none z-10"></div>
          </div>
        </aside>

        <div class="lg:col-span-8 space-y-32">
          <form @submit.prevent="submitMessage" class="space-y-12 p-10 bg-zinc-50/80 dark:bg-zinc-900/50 backdrop-blur-md rounded-[3rem] border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-2xl">
            <div class="space-y-4">
              <label class="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Identity</label>
              <input v-model="form.name" type="text" required @focus="isInteracting = true" @blur="isInteracting = false" class="w-full bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 py-4 text-2xl font-bold focus:border-purple-500 outline-none" placeholder="What's your name?" />
            </div>
            <div class="space-y-4">
              <label class="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Message</label>
              <textarea v-model="form.message" rows="3" required @focus="isInteracting = true" @blur="isInteracting = false" class="w-full bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 py-4 text-2xl font-bold focus:border-purple-500 outline-none resize-none" placeholder="Say something meaningful..." ></textarea>
            </div>
            <button type="submit" :disabled="isSubmitting" class="group relative w-full py-6 bg-purple-600 text-white rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-purple-700 transition-all">
              <span class="relative z-10">{{ isSubmitting ? 'Syncing...' : 'Sign Guestbook' }}</span>
            </button>
          </form>

          <div class="space-y-16">
            <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">The Chronicle</h2>
            <div v-if="isLoading" class="animate-pulse space-y-8">
              <div v-for="i in 3" :key="i" class="h-32 bg-zinc-100 dark:bg-zinc-900 rounded-3xl"></div>
            </div>
            <div v-else class="space-y-16">
              <div v-for="msg in messages" :key="msg.id" class="pl-8 border-l-2 border-zinc-100 dark:border-zinc-800">
                <div class="flex justify-between items-baseline mb-4">
                  <span class="text-3xl font-black">{{ msg.name }}</span>
                  <span class="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{{ new Date(msg.created_at).toLocaleDateString() }}</span>
                </div>
                <p class="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ msg.message }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

const messages = ref([])
const form = ref({ name: '', message: '' })
const isLoading = ref(true)
const isSubmitting = ref(false)
const isInteracting = ref(false)

const fetchMessages = async () => {
  try {
    const { data } = await supabase.from('guestbook').select('*').order('created_at', { ascending: false })
    messages.value = data || []
  } finally { isLoading.value = false }
}

const submitMessage = async () => {
  if (isSubmitting.value) return
  isSubmitting.value = true
  try {
    // DATABASE FIX: Added .value to correctly send data to Supabase
    const { error } = await supabase.from('guestbook').insert([
      { name: form.value.name, message: form.value.message }
    ])
    if (error) throw error
    form.value = { name: '', message: '' }
    await fetchMessages()
  } catch (e) { alert(e.message) } finally { isSubmitting.value = false }
}

onMounted(fetchMessages)
</script>

<style scoped>
.animate-pulse-slow { animation: pulse 4s ease-in-out infinite; }
@keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
.flame-main { width: 14px; height: 24px; background: linear-gradient(to bottom, transparent 0%, #8b5cf6 20%, #fef3c7 90%); border-radius: 50% 50% 20% 20%; filter: blur(0.5px); position: relative; box-shadow: 0 0 15px rgba(139, 92, 246, 0.4); }
.flame-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 40px; height: 40px; background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%); border-radius: 50%; filter: blur(8px); }
@keyframes flicker { 0%, 100% { transform: scale(1) rotate(-1deg); opacity: 0.9; } 20% { transform: scale(1.1, 0.9) rotate(1deg); opacity: 1; } 40% { transform: scale(0.9, 1.1) rotate(-2deg); opacity: 0.8; } 60% { transform: scale(1.05) rotate(2deg); opacity: 1; } 80% { transform: scale(0.95) rotate(-1deg); opacity: 0.9; } }
.animate-flicker { animation: flicker 0.15s ease-in-out infinite; }
</style>