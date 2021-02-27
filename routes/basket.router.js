const basketRouter = require('express').Router()
const {
  addItemToBasket,
  removeItemFromBasket,
  emptyBasket,
  getBasket
} = require('../controllers/basket.controller')

basketRouter.route('/additem').post(addItemToBasket)
basketRouter.route('/removeitem').delete(removeItemFromBasket)
basketRouter.route('/clearbasket').delete(emptyBasket)

module.exports = basketRouter
