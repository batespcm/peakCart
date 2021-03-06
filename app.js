const express = require('express')

const app = express()
const apiRouter = require('./routes/api.router.js')
app.use(express.json())

app.use('/api', apiRouter)

module.exports = app
