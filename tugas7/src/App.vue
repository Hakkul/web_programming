<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import ProdukCard from './components/ProdukCard.vue';
// import { use } from 'react';
// import { use_card_store } from './stores/cartStore';
// const cardStore = use_card_store()

import { useCardStore } from './stores/cartStore';
const cardStore = useCardStore();
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

<style>
/* Styling dasar agar tampilan rapi */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8fafc;
  margin: 0;
  padding: 0;
}

.navbar {
  background-color: #ffffff;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.navbar h1 {
  font-size: 20px;
  color: #1e293b;
  margin: 0;
}

.nav-links {
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #64748b;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.2s;
}

/* Style otomatis untuk rute yang sedang aktif */
.nav-links a.router-link-active {
  color: #2563eb;
  background-color: #eff6ff;
}

.badge {
  background-color: #ef4444;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
}

.main-content {
  padding: 20px;
}
</style>