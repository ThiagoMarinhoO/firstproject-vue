<script setup>
    import useChirps from '../../composable/chirps.js';
    import { onMounted } from 'vue';
    import { reactive } from 'vue';

    const { chirps, getChirps, storeChirp, destroyChirp, errors } = useChirps();

    const form = reactive({
        username: "",
        message: "",
    });

    onMounted(() => getChirps());

</script>

<template>
    <div class="mt-16 mb-8 divide-y">
        <form @submit.prevent="storeChirp(form)">
            <textarea
                placeholder="O que você está pensando ?"
                class="w-full px-4 py-4 rounded-lg border-2 border-slate-300 outline-none" id="chirpMessage" v-model="form.message"></textarea>
            <div v-if="errors.message">
                <span class="text-sm text-red-400">{{errors.message[0]}}</span>
            </div>
            <input type="text" id="chirpUsername" class="mt-5 w-full px-4 py-4 rounded-lg border-2 border-slate-300 outline-none" placeholder="Author" v-model="form.username">
            <div v-if="errors.username">
                <span class="text-sm text-red-400">{{errors.username[0]}}</span>
            </div>
            <button type="submit" class="px-4 py-2 rounded-lg font-medium text-white bg-slate-800 mt-4">Chirp</button>
        </form>
    </div>

    <div class="mt-16 mb-8 divide-y flex flex-col gap-4">
        <div 
            v-for="chirp in chirps"
            :key="chirp.id"
            class="p-6 flex space-x-2 bg-white shadow-sm rounded-lg"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 -scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <div class="flex-1">
                <div class="flex justify-between items-center">
                    <div>
                        <span class="text-gray-800">{{ chirp.username }}</span>
                    </div>
                    <!-- Início do Modal de Abertura -->
                    <div class="flex gap-2">
                        <RouterLink :to="{ name: 'ChirpsEdit', params: { id: chirp.id } }" class="font-medium text-xs text-blue-600 hover:underline">Edit</RouterLink>
                        <button @click="destroyChirp(chirp.id)" class="font-medium text-xs text-red-600 hover:underline">Delete</button>
                    </div>
                </div>
                <p class="mt-4 text-lg text-gray-900">{{ chirp.message }}</p>
            </div>
        </div>
    </div>
</template>