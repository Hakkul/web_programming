import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/tes', (info) => {
  return info.text('API info aktiv')
})

app.get('/json', (info) => {
  return info.json({
    "message" : "True",
    "keaadan" : "API dari json"
  })
})

export default app
