import { Hono } from 'hono'


const app = new Hono()

const inventaris = [
  {id: 1, nama: "Komputer"},
  {id: 2, nama: "proyektor"},
  {id: 3, nama: "Switch"},
  {id: 4, nama: "Router"}
]

app.get('/', (c) => {
  return c.text('Server API aktif')
})

app.get('/api/inventaris', (c) => {
  return c.json({ inventaris })
})


export default app
