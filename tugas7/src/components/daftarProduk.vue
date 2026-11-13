<script setup>

import { ref } from 'vue';
import ProdukCard from './ProdukCard.vue';
import { useCardStore } from '../stores/cartStore';
import '../assets/css/daftarProduk.css'
// import ''
const cardStore = useCardStore();

const daftarProduk = ref([
    {id: 1, nama: 'buku tulis', harga: 2000, Stok: 3, gambar: '/img/book.png'},
    {id: 2, nama: 'buku gambar', harga: 5000, Stok: 7, gambar: '/img/book.png'},
    {id: 3, nama: 'buku coding', harga: 7000, Stok: 9, gambar: '/img/book.png'},
    {id: 4, nama: 'buku mewarnai', harga: 6500, Stok: 6, gambar: '/img/book.png'}

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

      <!-- Perhatikan kata 'item' di bawah ini -->
      <ProdukCard 
        v-for="item in daftarProduk" 
        :key="item.id"
        :id="item.id"
        :nama="item.nama"
        :harga="item.harga"
        :stok="item.Stok"
        :gambar="item.gambar" 
        @Beli_produk="handleBuyProduk"
      />
    </div>
  </div>
</template>