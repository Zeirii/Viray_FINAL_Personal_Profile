<template>
  <div class="max-w-3xl mx-auto animate-fade-in pb-12 p-4">
    <h2 class="text-3xl font-bold mb-8 border-b-2 border-purple-500 pb-2 inline-block">Guestbook</h2>
    
    <form @submit.prevent="submitMessage" class="space-y-4 mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
      <div>
        <label class="block text-sm font-semibold mb-1">Name</label>
        <input v-model="form.name" type="text" required :disabled="isSubmitting" class="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none" />
      </div>
      <div>
        <label class="block text-sm font-semibold mb-1">Message</label>
        <textarea v-model="form.message" rows="3" required :disabled="isSubmitting" class="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"></textarea>
      </div>
      <button type="submit" :disabled="isSubmitting" class="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 font-bold transition-all disabled:opacity-50 shadow-md">
        {{ isSubmitting ? 'Sending...' : 'Sign Guestbook' }}
      </button>
    </form>

    <div class="space-y-4">
      <div v-if="isLoading" class="text-center py-10 animate-pulse text-gray-500 font-medium italic">Connecting to Supabase...</div>
      <div v-else-if="messages.length === 0" class="text-center py-10 text-gray-400 italic">No messages yet. Be the first to sign!</div>
      <div v-for="msg in messages" :key="msg.id" class="p-5 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
        <div class="flex justify-between items-center mb-2">
          <span class="font-bold text-purple-600 dark:text-purple-400">{{ msg.name }}</span>
          <span class="text-xs text-gray-400 font-mono">{{ new Date(msg.created_at).toLocaleDateString() }}</span>
        </div>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">{{ msg.message }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase' 

const messages = ref([])
const form = ref({ name: '', message: '' })
const isLoading = ref(true)
const isSubmitting = ref(false)

const fetchMessages = async () => {
  try {
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    messages.value = data
  } catch (e) {
    console.error("Fetch error:", e.message)
  } finally {
    isLoading.value = false
  }
}

const submitMessage = async () => {
  isSubmitting.value = true
  try {
    const { error } = await supabase
      .from('guestbook')
      .insert([{ name: form.value.name, message: form.value.message }])
    
    if (error) throw error
    
    form.value = { name: '', message: '' }
    await fetchMessages() 
  } catch (e) {
    alert("Error saving message: " + e.message)
  } finally {
    isSubmitting.value = false
  }
}

onMounted(fetchMessages)
</script>