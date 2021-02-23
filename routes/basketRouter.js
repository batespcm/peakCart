const basketRouter = require('express').Router();
const { addItemToBasket, removeItemFromBasket, emptyBasket, getBasket } = require('../controllers/basket.controller')

basketRouter
    .route('/')
    .post(addItemToBasket)



module.exports = basketRouter;