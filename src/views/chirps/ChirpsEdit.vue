<script setup>
    import useChirps from '../../composable/chirps.js';
    import { onMounted } from 'vue';

    const { chirp, getChirp, updateChirp, errors } = useChirps();

    const props = defineProps({
        id: {
            required: true,
            type: String,
        },
    });

    onMounted(() => getChirp(props.id));

</script>

<template>
    <div>
        <div class="mt-16 mb-8 divide-y">
            <form @submit.prevent="updateChirp($route.params.id)">
                <textarea
                    class="w-full px-4 py-4 rounded-lg border-2 border-slate-300 outline-none" id="chirpMessage" v-model="chirp.message"></textarea>
                <div v-if="errors.message">
                    <span class="text-sm text-red-400">{{errors.message[0]}}</span>
                </div>
                <input type="text" id="chirpUsername" class="mt-5 w-full px-4 py-4 rounded-lg border-2 border-slate-300 outline-none" placeholder="Author" v-model="chirp.username">
                <div v-if="errors.username">
                    <span class="text-sm text-red-400">{{errors.username[0]}}</span>
                </div>
                <button type="submit" class="px-4 py-2 rounded-lg font-medium text-white bg-slate-800 mt-4">Update Chirp</button>
            </form>
        </div>
    </div>
</template>