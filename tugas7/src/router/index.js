import {createRouter, createWebHistory } from 'vue-router'
import DaftarProduk from '../components/daftarProduk.vue'
import cardView from '../views/cardView.vue'

const routes = [
    {
        path: '/',
        name: 'Beranda',
        component: DaftarProduk
    },

    {
        path: '/cart',
        name: 'cart',
        component: cardView

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
