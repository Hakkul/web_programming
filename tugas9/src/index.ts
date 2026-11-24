import { Hono } from 'hono'


const app = new Hono()

const inventaris = [
  {id: 1, nama: "Komputer"},
  {id: 2, nama: "proyektor"},
  {id: 3, nama: "Switch"},
  {id: 4, nama: "Router"}
]

// Start API
app.get('/', (c) => {
  return c.text('Server API aktif')
})

// Menampilkan seluruh data inventaris
app.get('/api/inventaris', (c) => {
  return c.json({ inventaris })
})

// Menampilkan data inventaris berdasarkan id
app.get('/api/inventaris/:id', (c) => {
  const id = Number(c.req.param('id'))
  const IdBarang = inventaris.find((item) => item.id === id)

  if (!IdBarang) {
    return c.json({
      Status: 'eror',
      Message: `Barang dengan id ${id} tidak ada`}, 404)
  }

  return c.json({
    Status: 'Succes',
    IdBarang
  })
})

// Menambah data inventaris
app.post('/api/inventaris', async (c) => {
  const tambah = await c.req.json()
  const respon = {...tambah}

  return c.json(respon)
})

export default app
