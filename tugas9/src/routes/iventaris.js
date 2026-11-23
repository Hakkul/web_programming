import { Hono } from 'hono'

const iventaris = new Hono()

const DataIventaris = [
    {id: 1, nama: "Komputer", Jumlah: 3, kondisi: "Baik"},
    {id: 2, nama: "Proyektor", Jumlah: 4, kondisi: "Baik"},
    {id: 3, nama: "Switch", Jumlah: 6, kondisi: "Baik"},
    {id: 4, nama: "Router", Jumlah: 7, kondisi: "Baik"},
]

// Menampilkan semua data iventaris
iventaris.get('/', (info) => {
    return info.json({ DataIventaris })
})

// Memangiil data iventarsis sesuai ID
iventaris.get('/:id', (info) => {
    const id = Number(info.req.param('id'))
    const barang = DataIventaris.find((item) => item.id === id)

    if (!barang) {
        return info.json({ 
        Status: 'eror bos', 
        Message: `Barang dengan id ${id} tidak ada`}, 404)
    }

    return info.json({
        Status: 'Succes bos',
        data: barang
    })
})

iventaris.post ('/', async (info) => {
    const tambah = await info.req.json()
    const respon = {...tambah}

    DataIventaris.push(respon)

    return info.json(respon)
})


export default iventaris