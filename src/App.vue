<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './assets/main.css'
</script>

<template>
  <header>
    <div class="mx-auto bg-white">
      <nav class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul class="flex flex-wrap -mb-px">
              <li class="mr-2">
                  <a href="#" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"><RouterLink to="/">Home</RouterLink></a>
              </li>
              <li class="mr-2">
                  <a href="#" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" aria-current="page"><RouterLink to="/about">About</RouterLink></a>
              </li>
          </ul>
      </nav>
    </div>
  </header>

  <main class="mx-auto max-w-6xl min-h-screen">
    <RouterView />
  </main>
</template>
