<script setup>

import { ref } from 'vue';
import ProdukCard from './ProdukCard.vue';
import { useCardStore } from '../stores/cartStore';
import '../assets/css/daftarProduk.css'
const cardStore = useCardStore();

const daftarProduk = ref([
    {id: 1, nama: 'buku tulis', harga: 2000, Stok: 3, gambar: '/img/buku_tulis.jpeg'},
    {id: 2, nama: 'buku gambar', harga: 5000, Stok: 7, gambar: '/img/buku_gambar.jpeg'},
    {id: 3, nama: 'buku coding', harga: 7000, Stok: 9, gambar: '/img/book.png'},
    {id: 4, nama: 'buku mewarnai', harga: 6500, Stok: 6, gambar: '/img/buku_warna.jpeg'},
    {id: 5, nama: 'buku horor', harga: 5000, Stok: 5, gambar: '/img/horor.jpeg'}


])


const handleBuyProduk = (produk_data) => {
  const produk = daftarProduk.value.find(p => p.id === produk_data.id)

  if (produk && produk.Stok > 0) {
    produk.Stok--
  } else {
    alert('stok habis')
  }
    cardStore.tambahItem(produk_data)
    
}

</script>

<template>
  <div class="daftar-produk-container">
    <h2>Katalog baru</h2>
    <p>Silahkan pilih buku yang anda inginkan</p>
    

    <div class="produk-grid">

      <ProdukCard 
        v-for="item in daftarProduk" 
        :key="item.id"
        :id="item.id"
        :nama="item.nama"
        :harga="item.harga"
        :Stok="item.Stok"
        :gambar="item.gambar" 
        @beli_produk="handleBuyProduk"
      />
    </div>
  </div>
</template>