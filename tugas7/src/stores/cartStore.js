import {defineStore} from 'pinia'
import { ref, computed } from 'vue'

export const useCardStore = defineStore('card', () => {
    // Menyimpan daftar barang dikeranjang
    const items =  ref([])

        // Menghitung total jumlah barang
    const totalItem = computed (() => {
        return items.value.reduce((total, item) => item.qty, 0)
    })
    // Menghitung tottal harga keseluruhan
    const total_harga = computed(() => {
        return items.value.reduce((total, item) => total + (item.harga * item.qty), 0)
    })
    // Menambahkan Item ke keranjang
    function tambahItem(produk) {
        const existing = items.value.find(i => i.id === produk.id)
        if(existing) {
            existing.qty++
        } else {
            items.value.push({ ...produk, qty: 1})
        }
    }
    // Menghapus Item dari keranjang 
    function hapusItem(id) {
        items.value = items.value.filter(i => i.id !== id)
    }
    // Wajib di return agar bisa dipakai di komponen lain
    return {
        items,
        totalItem,
        total_harga,
        tambahItem,
        hapusItem
    }
    
})