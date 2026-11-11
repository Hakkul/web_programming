import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // State: Menyimpan daftar barang di keranjang
  const items = ref([])

  // Getters: Menghitung total jumlah barang
  const totalItem = computed(() => {
    return items.value.reduce((total, item) => total + item.qty, 0)
  })

  // Getters: Menghitung total harga keseluruhan
  const totalHarga = computed(() => {
    return items.value.reduce((total, item) => total + (item.harga * item.qty), 0)
  })

  // Actions: Menambah item ke keranjang
  function tambahItem(produk) {
    const existing = items.value.find(i => i.id === produk.id)
    if (existing) {
      existing.qty++
    } else {
      items.value.push({ ...produk, qty: 1 })
    }
  }

  // Actions: Menghapus item dari keranjang
  function hapusItem(id) {
    items.value = items.value.filter(i => i.id !== id)
  }

  // Wajib di-return agar bisa dipakai di komponen lain
  return {
    items,
    totalItem,
    totalHarga,
    tambahItem,
    hapusItem
  }
})