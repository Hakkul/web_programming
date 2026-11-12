<script setup>

import { ref } from 'vue';
import ProdukCard from './ProdukCard.vue';
import { useCardStore } from '../stores/cartStore';
import '../assets/css/daftarProduk.css'

const cardStore = useCardStore();

const daftar_produk = ref([
    {id: 1, nama: 'buku_tulis', harga: 2000, Stok: 3},
    {id: 2, nama: 'buku_gambar', harga: 5000, Stok: 7},
    {id: 3, nama: 'buku_coding', harga: 7000, Stok: 9},

])


const handleBuyProduk = (produk_data) => {
    cardStore.tambahItem(produk_data)
    
}

</script>

<template>
    <div class="daftar-produk-container">
        <h2>Katalog baru</h2>
        <p>Silahkan pilih buku yang anda inginkan</p>

    <div class="produk-grid">
        <ProdukCard 
        v-for="produk in daftar_produk"
        :key="produk.id"
        :id="produk.id"
        :nama="produk.nama"
        :harga="produk.harga"
        :stok="produk.Stok"
        :item.Stok--
        @beli_produk="handleBuyProduk"
        />
    </div>
    </div>
</template>