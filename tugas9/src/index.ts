import { Hono } from 'hono'
// @ts-ignore
// import inventarisBarang from './routes/inventaris.js'

const app = new Hono()

app.get('/', (c) => {
  return c.text('API aktif')
})

// app.route('/api/inventaris', inventarisBarang)



export default app
