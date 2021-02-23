const apiRouter = require('express').Router();

const basketRouter = require('./basketRouter');

apiRouter.use('/basket', basketRouter);

module.exports = apiRouter;