const fakeSessionsDB = require('../fakeSessionsDB')

const fetchBasketFromDB = sessionID => {
  const userBasket = fakeSessionsDB.filter(stored => {
    if (stored.sessionID === sessionID) {
      return stored.items
    }
  })
  return userBasket
}

module.exports = fetchBasketFromDB
