const express = require('express')

const app = express()

const basketRouter = require('./routes/basketRouter.js')


app.use(express.json())

app.use('/basket', basketRouter)


module.exports = app;