<script setup> 
// import './assets/css/buku.css'
// Mengimpor file CSS dari folder terpisah
import '../assets/css/buku.css';

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
    <div class="buku-container">
        <h2>📚 Daftar Buku Catatanku</h2>
        
        <!-- Form Input -->
        <form @submit.prevent="tambahTugas" class="form-card">
            <div class="input-group">
                <input v-model="newTugas" required placeholder="Masukkan judul buku...">
            </div>

            <div class="input-group">
                <select v-model="kategori">
                    <option disabled value="">-- Pilih Kategori --</option>
                    <option v-for="kat in Daftarkategori" :key="kat" :value="kat">
                        {{ kat.toUpperCase() }}
                    </option>
                </select>
            </div>

            <div class="input-group checkbox-group">
                 <label>
                    <input type="checkbox" v-model="StatusBaca"> Sudah Dibaca
                </label>
            </div>

            <button type="submit" class="btn-tambah">+ Tambah Buku</button>
        </form>

        <!-- Daftar Buku -->
        <div class="list-section">
            <h3>Daftar Koleksi Buku</h3>
            <p class="stats">Total buku selesai dibaca: <strong>{{ jumlahSelesai }}</strong> dari {{ tugas.length }} buku</p>
            
            <ul class="buku-list">
                <li v-for="item in tugas" :key="item.id" :class="{ 'selesai': item.sudahbaca }">
                    <div class="info-buku">
                        <span class="judul">{{ item.text }}</span>
                        <span class="badge">{{ item.kategoriPilihan }}</span>
                    </div>
                    <span class="status-badge" :class="item.sudahbaca ? 'badge-sukses' : 'badge-belum'">
                        {{ item.sudahbaca ? '✓ Selesai' : '⏳ Belum' }}
                    </span>
                </li>
            </ul>

            <p v-if="tugas.length === 0" class="empty-text">Belum ada buku dalam daftar.</p>
        </div>
    </div>
</template>