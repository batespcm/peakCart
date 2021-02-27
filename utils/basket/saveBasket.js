const mockDB = require('../mock_db')

const saveBasket = (sessionID, newBasket) => {
  const updatedBasket = mockDB.filter(sessionData => {
    if (sessionData.sessionID === sessionID) {
      sessionData.items = newBasket
      return true
    }
  })

  return updatedBasket[0].items
}

module.exports = saveBasket
