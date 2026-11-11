import {createRouter, createwebhistory } from 'vue-router'
import DaftarProduk from '../components/daftarProduk.vue'
import cardView from '../components/cardView.vue'

const route = [
    {
        path: '/',
        nama: 'Beranda',
        Component: DaftarProduk
    },

    {
        path: '/card',
        nama: 'Keranjag',
        Component: cardView

    }
]

const router = createRouter({
    history: createwebhistory(),
    route
})

export default router
