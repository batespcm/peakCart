const {
  fetchBasketFromDB,
  saveToMockDB,
  removeItem,
  addItem,
  clearBasket
} = require('../utils/basketUtils')

const addItemToBasket = async (req, res, next) => {
  // async / await not needed
  try {
    const { sessionID, items } = req.body
    const addedItem = items
    const storedBasket = await fetchBasketFromDB(sessionID)
    const newBasket = await addItem(storedBasket, addedItem)
    // const checkoutBasket = await saveToMockDB(sessionID, newBasket)
    res.send({ basket: newBasket })
  } catch (error) {
    next(error)
  }
}

const getBasket = async (req, res, next) => {}

const removeItemFromBasket = async (req, res) => {}

const emptyBasket = async (req, res) => {}

module.exports = {
  addItemToBasket,
  removeItemFromBasket,
  emptyBasket,
  getBasket
}
