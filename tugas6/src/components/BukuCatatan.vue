<script setup> 

import { ref, computed} from 'vue';

const Daftarkategori = ref(['fiksi', 'novel', 'horor'])
const kategori = ref('')
const StatusBaca = ref(false)
const jumblahSelesai = computed(() => {
    return tugas.value.filter(item => item.sudahbaca).length
})
    let id = 0

    const newTugas = ref('')
    const tugas = ref ([])

    function tambahTugas() {
        if (!newTugas.value.trim()) return;

        tugas.value.push({ 
        id: id++, 
        text: newTugas.value,
        kategoriPilihan: kategori.value,
        sudahbaca: StatusBaca.value

     
    })
    newTugas.value = ''
    kategori.value = ''
    StatusBaca.value = false
    }
</script>


<template>
    <h1>ini buku catatan</h1>
    <form @submit.prevent="tambahTugas">
        <div>
            <input v-model="newTugas" required placeholder="masukan judul buku">
            <button>tambah judul</button>
        </div>

        <div>
            <select v-model="kategori">
                <option disabled value="">pilih kategori</option>

                <option v-for="kat in Daftarkategori" :key="kat" :value="kat">
                    {{ kat }}
                </option>
            </select>
        </div>

        <div>
             <label>
                <input type="checkbox" v-model="StatusBaca"> Sudah Dibaca
            </label>
        </div>
        
        <ul>
            <li v-for="item in tugas" :key="item.id" >
               <strong> {{ item.text }} </strong>
               - Kategori: {{ item.kategoriPilihan || '-' }}
               - status: {{ item.sudahbaca  ? 'selesai' : 'belum' }}

            </li>
        </ul>
    </form>

    <div>
        <p>Total buku selesai dibaca: {{ jumblahSelesai }}</p>
    </div>
    
</template>