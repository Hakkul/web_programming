<script setup>

import { ref } from 'vue';

    let id = 0

    const newTugas = ref('')
    const tugas = ref ([])

const Daftarkategori = ref(['fiksi', 'novel'])
const kategori = ref('')

    function tambahTugas() {
        if (!newTugas.value.trim()) return;

        tugas.value.push({ 
        id: id++, 
        text: newTugas.value})
        newTugas.value = ''
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

                <option v-for="kat in Daftarkategori" :key="kat" value="kat">
                    {{ kat }}
                </option>
            </select>
        </div>
        
        <ul>
            <li v-for="item in tugas" :key="item.id" >
                {{ item.text }}
            </li>
        </ul>
    </form>
    
</template>