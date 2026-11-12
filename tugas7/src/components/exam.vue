<template>
    <div class="produk-card">
        <h3>{{ nama }}</h3>   
        <p class="price">Rp {{ harga.toLocaleString("id-ID") }}</p>
        
        <!-- Diperbaiki: Menggunakan teks string 'Habis' -->
        <p :class="{ habis: stok === 0 }">
            Stok: {{ stok > 0 ? stok : 'Habis' }}
        </p>

        <!-- Diperbaiki juga sedikit typo 'kosng' jadi 'Kosong' -->
        <button @click="handleBeli" :disabled="stok === 0"> 
            {{ stok > 0 ? '+ keranjang' : 'Stok Kosong' }}
        </button>
    </div>
</template>