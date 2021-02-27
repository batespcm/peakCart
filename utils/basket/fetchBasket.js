const mockDB = require('../mock_db')

const fetchBasket = sessionID => {
  const userBasket = mockDB.filter(stored => {
    return stored.sessionID === sessionID
  })
  if (userBasket.length === 0) {
    return null
  } else {
    return userBasket[0].items
  }
}

module.exports = fetchBasket
