import {createRouter, createWebHistory } from 'vue-router'
import DaftarProduk from '../components/daftarProduk.vue'
import cardView from '../components/cardView.vue'

const routes = [
    {
        path: '/',
        nama: 'Beranda',
        Component: DaftarProduk
    },

    {
        path: '/card',
        nama: 'card',
        Component: cardView

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
