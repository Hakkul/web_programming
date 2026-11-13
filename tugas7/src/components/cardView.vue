<script setup>
// import { useCartStore } from '../stores/cartStore';
import { useCardStore } from '../stores/cartStore';
import '../assets/css/cart.css'

// Panggil store Pinia
const cartStore = useCardStore();
</script>

<template>
  <div class="cart-container">
    <h2>🛒 Keranjang Belanja</h2>

    <!-- Jika keranjang kosong -->
    <p v-if="cartStore.items.length === 0">Belum ada produk di dalam keranjang.</p>

    <!-- Jika ada produk di keranjang -->
    <div v-else>
      <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
        <div>
          <h4>{{ item.nama }}</h4>
          <p>Rp {{ item.harga }} x {{ item.qty }}</p>
        </div>
        <button @click="cartStore.hapusItem(item.id)">Hapus</button>
      </div>

      <hr />
      <h3>Total Harga: Rp {{ cartStore.total_harga.toLocaleString("id-ID") }}</h3>
    </div>
  </div>
</template>