<script setup>
import { useCardStore } from './stores/cartStore';
const cardStore = useCardStore();
import './assets/css/app.css'
</script>

<template>
  <div id="app">
    <!-- Menu Navigasi Utama -->
    <header class="navbar">
      <h1>📚 Toko Buku Online</h1>
      
      <nav class="nav-links">
        <!-- Mengarahkan ke rute '/' (Katalog Produk) -->
        <router-link to="/">Katalog</router-link>
        
        <!-- Mengarahkan ke rute '/cart' (Halaman Keranjang) + Badge total item -->
        <router-link to="/cart">
          Keranjang 🛒 <span class="badge">{{ cardStore.totalItem }}</span>
        </router-link>
      </nav>
    </header>

    <!-- Tempat di mana komponen halaman (daftarProduk atau cardView) dirender otomatis -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

