const apiRouter = require('express').Router()

const basketRouter = require('../basket.router')

apiRouter.use('/basket', basketRouter)

module.exports = apiRouter
