<script setup>

import '../assets/css/produkCard.css'

const props = defineProps({
    id: {type: Number, required: true},
    nama: {type: String, required: true},
    harga: {type: Number, required: true},
    stok: {type: Number, default: 0}
})

const emit = defineEmits(["Beli_produk"])

const handleBeli = () => {
    if (props.stok > 0) {
        emit("Beli_produk", {id: props.id, nama: props.nama, harga: props.harga})
    }
}

</script>

<template>
    <div class="produk-card">
     <h3> {{ nama }}</h3>   
     <p class="price">Rp {{ harga.toLocaleString("id-ID") }}</p>
     <p :class="{habis:stok === 0}">
        Stok: {{ stok > 0 ? stok: 'habis' }}</p>

     <button @click="handleBeli" :disabled="stok === 0"> 
         {{ stok > 0  ? '+ keranjang' : 'Stok kosong' }}
     </button>
    </div>
</template>