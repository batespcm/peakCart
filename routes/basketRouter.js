const basketRouter = require('express').Router();


basketRouter.use('', () => {
    console.log('you have reached the basket router')

})


module.exports = basketRouter;