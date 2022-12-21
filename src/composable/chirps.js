import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";


export default function useChirps() {
    const chirps = ref([]);
    const chirp = ref([]);
    const router = useRouter();
    const errors = ref({});
    
    const getChirps = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/chirps');
        chirps.value = response.data.data;
    }
    
    const getChirp = async (id) => {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/chirps/' + id);
        chirp.value = response.data.data;
    }
    
    const storeChirp = async (data) => {
        try{
            await axios.post('http://127.0.0.1:8000/api/v1/chirps', data);
            await router.push({name: "ChirpsIndex"});
            await window.location.reload();
        } catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const updateChirp = async (id) => {
        try{
            await axios.put('http://127.0.0.1:8000/api/v1/chirps/' + id, chirp.value);
            await router.push({name: "ChirpsIndex"});
        } catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const destroyChirp = async (id) => {
        if(!window.confirm("Deletar Mensagem ?")){
            return;
        }

        await axios.delete('http://127.0.0.1:8000/api/v1/chirps/' + id);
        await getChirps();
    }
    
    return {
        chirps,
        getChirps,
        chirp,
        getChirp,
        storeChirp,
        updateChirp,
        destroyChirp,
        errors,
    }
};