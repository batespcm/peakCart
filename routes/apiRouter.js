const apiRouter = require('express').Router();

const basketRouter = require('./usersRouter');

apiRouter.use('/basket', basketRouter);

module.exports = apiRouter;