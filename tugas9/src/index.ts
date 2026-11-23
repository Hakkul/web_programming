import { Hono } from 'hono'
// @ts-ignore
import iventarisBarang from './routes/iventaris.js'

const app = new Hono()

app.get('/', (c) => {
  return c.text('API aktif')
})

app.route('/api/iventaris', iventarisBarang)


export default app
