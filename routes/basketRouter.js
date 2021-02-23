const basketRouter = require('express').Router();
const { addItemToBasket, removeItemFromBasket, emptyBasket } = require('../controllers/basket.controller')

basketRouter
    .route('/')
    .post(addItemToBasket)



module.exports = basketRouter;