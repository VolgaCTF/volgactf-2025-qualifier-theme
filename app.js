const express = require('express')
const mailsRouter = require('./mails')
const assetsRouter = require('./assets')

const app = express()

app.use('/mail', mailsRouter)
app.use('/assets', assetsRouter)

app.get('/metadata', function (req, res) {
  res.json({
    name: '2025-qualifier-theme',
    version: '1.0.0'
  })
})

app.get('/event-title', function (req, res) {
  res.set('Content-Type', 'text/plain')
  res.send('VolgaCTF 2025 Qualifier')
})

module.exports = app
