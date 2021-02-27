const {
  fetchBasket,
  saveBasket,
  removeItem,
  addItem,
  clearBasket
} = require('../utils/basket')

const addItemToBasket = (req, res, next) => {
  try {
    const { sessionID, item } = req.body
    const basket = fetchBasket(sessionID)
    const updatedBasket = addItem(basket, item)

    const savedBasket = saveBasket(sessionID, updatedBasket)
    res.send({ basket: savedBasket })
  } catch (error) {
    next(error)
  }
}

const getBasket = (req, res, next) => {}

const removeItemFromBasket = (req, res, next) => {}

const emptyBasket = async (req, res, next) => {}

module.exports = {
  addItemToBasket,
  removeItemFromBasket,
  emptyBasket,
  getBasket
}
