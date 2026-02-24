<template>
  <div class="animate-fade-in selection:bg-purple-500/30">
    
    <section class="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      <div 
        class="w-full h-full bg-cover bg-center transition-transform duration-[3000ms] hover:scale-110" 
        style="background-image: url('/keqing.gif'); background-position: center 20%;"
      ></div>
      
      <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0c10] via-transparent to-black/20 flex items-end">
        <div class="max-w-7xl mx-auto w-full px-6 pb-12">
          <h1 class="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-4 text-zinc-900 dark:text-white">
            Guestbook
          </h1>
          <p class="text-xl font-medium text-zinc-500 italic font-serif">Leave a mark on my digital space</p>
        </div>
      </div>
    </section>

    <main class="max-w-7xl mx-auto px-6 py-24 lg:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <aside class="lg:col-span-4 space-y-8">
          <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-purple-500">Identity & Trace</h2>
          <p class="text-2xl font-medium text-zinc-500"> if we have met in Discord, IRL, School, Or in events feel free to leave a message it will be permanently here</p>
        </aside>

        <div class="lg:col-span-8 space-y-24">
          <form @submit.prevent="submitMessage" class="space-y-12 p-10 bg-zinc-50 dark:bg-zinc-900/50 rounded-[3rem] border border-zinc-100 dark:border-zinc-800">
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-zinc-400">Name</label>
              <input v-model="form.name" type="text" required class="w-full bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 py-4 text-2xl font-bold focus:border-purple-500 outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="text-[10px] font-black uppercase tracking-widest text-zinc-400">Message</label>
              <textarea v-model="form.message" rows="3" required class="w-full bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 py-4 text-2xl font-bold focus:border-purple-500 outline-none transition-all resize-none"></textarea>
            </div>
            <button type="submit" :disabled="isSubmitting" class="w-full py-6 bg-purple-600 text-white rounded-3xl font-black uppercase tracking-[0.2em] text-xs hover:bg-purple-700 transition-all">
              {{ isSubmitting ? 'Syncing...' : 'Sign Guestbook' }}
            </button>
          </form>

          <div class="space-y-12">
            <div v-for="msg in messages" :key="msg.id" class="group border-l-2 border-zinc-100 dark:border-zinc-800 pl-8 pb-8 transition-colors hover:border-purple-500">
              <div class="flex justify-between items-baseline mb-2">
                <span class="text-3xl font-black group-hover:text-purple-500 transition-colors">{{ msg.name }}</span>
                <span class="text-[10px] font-mono text-zinc-400">{{ new Date(msg.created_at).toLocaleDateString() }}</span>
              </div>
              <p class="text-xl text-zinc-500 leading-relaxed">{{ msg.message }}</p>
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
const isSubmitting = ref(false)

const fetchMessages = async () => {
  const { data } = await supabase.from('guestbook').select('*').order('created_at', { ascending: false })
  messages.value = data
}

const submitMessage = async () => {
  isSubmitting.value = true
  const { error } = await supabase.from('guestbook').insert([form.value])
  if (!error) { form.value = { name: '', message: '' }; await fetchMessages() }
  isSubmitting.value = false
}

onMounted(fetchMessages)
</script>