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

const removeItemFromBasket = (req, res, next) => {
  try {
    const { sessionID, item } = req.body
    const basket = fetchBasket(sessionID)
    const updatedBasket = removeItem(basket, item)
    const savedBasket = saveBasket(sessionID, updatedBasket)
    res.send({ basket: savedBasket })
  } catch (error) {
    next(error)
  }
}

const getBasket = (req, res, next) => {
  // try {
  //   const { sessionID } = req.body
  //   console.log(sessionID)
  // } catch (error) {
  //   next(error)
  // }
}

const emptyBasket = async (req, res, next) => {
  try {
    const { sessionID } = req.body
    const basket = fetchBasket(sessionID)
    const updatedBasket = clearBasket(basket, sessionID)
    const savedBasket = saveBasket(sessionID, updatedBasket)
    console.log(savedBasket)

    res.send({ basket: savedBasket })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  addItemToBasket,
  removeItemFromBasket,
  emptyBasket,
  getBasket
}
