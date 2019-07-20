import express from 'express'

const app = express()

app.get('/serverroute', (req, res) => {
  res.send('You opened server route')
})

export default {
  path: '/',
  handler: app
}
