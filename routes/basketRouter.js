const basketRouter = require('express').Router();
const { addItemToBasket, removeItemFromBasket, emptyBasket } = require('../controllers/basket.controller')

// basketRouter
//     .route('/')
//     .get(addItemToBasket), () => {
//         console.log(' ROUTER REACHED you have reached the basket router')
//     }


module.exports = basketRouter;