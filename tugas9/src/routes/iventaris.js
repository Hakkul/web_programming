import { Hono } from 'hono'

const iventaris = new Hono()

const DataIventaris = [
    {id: 1, nama: "Komputer", Jumlah: 3, kondisi: "Baik"},
    {id: 2, nama: "Proyektor", Jumlah: 4, kondisi: "Baik"},
    {id: 3, nama: "Switch", Jumlah: 6, kondisi: "Baik"},
    {id: 4, nama: "Router", Jumlah: 7, kondisi: "Baik"},
]

//Menampilkan semua data iventaris
iventaris.get('/', (info) => {
    return info.json({ DataIventaris })
})



export default iventaris