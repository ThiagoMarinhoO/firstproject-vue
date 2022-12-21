<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './assets/main.css'
</script>

<template>
  <header class="border-none">
    <div class="mx-auto bg-white border-b border-gray-100">
      <nav class="max-w-6xl mx-auto text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <ul class="flex flex-wrap">
              <li class="mr-2">
                  <a href="#" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"><RouterLink to="/">Home</RouterLink></a>
              </li>
              <li class="mr-2">
                  <a href="#" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" aria-current="page"><RouterLink to="/chirps">Chirps</RouterLink></a>
              </li>
          </ul>
      </nav>
    </div>
  </header>

  <main class="mx-auto max-w-6xl min-h-screen">
    <RouterView />
  </main>
</template>
