<script setup>

import'../assets/css/produkCard.css'

const props = defineProps({
    id: {type: Number, required: true},
    nama: {type: String, required: true},
    harga: {type: Number, required: true},
    stok: {type: Number, default: 0},
    gambar: {type: String} // <-- Diperbaiki dari 'img' menjadi 'String'
})

const emit = defineEmits(["Beli_produk", "produk"])

const handleBeli = () => {
    if (props.stok > 0) {
        emit("Beli_produk", {id: props.id, nama: props.nama, harga: props.harga})
    }
}

</script>

<template>
    <div class="produk-card">
        <img :src="gambar" alt="Foto Buku" class="product-img" />
        <h3 class="nama-produk">{{ nama }}</h3>   
        <p class="harga-produk">Rp {{ harga.toLocaleString("id-ID") }}</p>
        <p class="stok-produk" :class="{habis: stok === 0}">
            Stok: {{ stok > 0 ? stok : 'habis' }}
        </p>

        <button @click="handleBeli" :disabled="stok === 0" class="button-cart"> 
            {{ stok > 0 ? '+ keranjang' : 'Stok kosong' }}
        </button>
    </div>
</template>