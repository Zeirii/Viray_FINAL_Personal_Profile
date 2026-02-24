<template>
  <div class="max-w-2xl mx-auto">
    <h2 class="text-3xl font-bold mb-8 border-b-2 border-purple-500 pb-2 inline-block">Guestbook</h2>
    
    <form class="space-y-4 mb-10 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <div>
        <label class="block text-sm font-medium mb-1">Name</label>
        <input type="text" placeholder="Your Name" class="w-full p-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 outline-none transition-all"/>
      </div>
      <div>
        <label class="block text-sm font-medium mb-1">Message</label>
        <textarea placeholder="Leave a message..." rows="3" class="w-full p-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 outline-none transition-all"></textarea>
      </div>
      <button type="submit" class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-md">
        Sign Guestbook
      </button>
    </form>
  </div>
</template>