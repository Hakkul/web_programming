<script setup>

import'../assets/css/produkCard.css'

const props = defineProps({
    id: {type: Number, required: true},
    nama: {type: String, required: true},
    harga: {type: Number, required: true},
    Stok: {type: Number, default: 0},
    gambar: {type: String} 
})

const emit = defineEmits(["beli_produk"])

const handleBeli = () => {
    if (props.Stok > 0) {
        emit("beli_produk", {
            id: props.id,
            nama: props.nama, 
            harga: props.harga, 
            Stok: props.Stok,
            gambar: props.gambar})
    } else {
        alert('stok habis')
    }
}

</script>

<template>
    <div class="produk-card">
        <img :src="gambar" alt="Foto Buku" class="product-img" />
        <h3 class="nama-produk">{{ nama }}</h3>   
        <p class="harga-produk">Rp {{ harga.toLocaleString("id-ID") }}</p>
        <p class="stok-produk" :class="{habis: Stok === 0}">
            Stok: {{ Stok > 0 ? Stok : 'habis' }}
        </p>

        <button @click="handleBeli" :disabled="Stok === 0" class="button-cart"> 
            {{ Stok > 0 ? '+ keranjang' : 'Stok kosong' }}
        </button>
    </div>
</template>