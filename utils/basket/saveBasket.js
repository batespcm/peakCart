const mockDB = require('../mock_db')

const saveBasket = (sessionID, newBasket) => {
  const updatedBasket = mockDB.filter(sessionData => {
    if (sessionData.sessionID === sessionID) {
      sessionData.items = newBasket
      return true
    }
  })
  if (updatedBasket.length === 0) {
    let updatedNewBasket = [
      {
        sessionID: sessionID,
        items: [...newBasket]
      }
    ]
    return updatedNewBasket[0].items
  } else {
    return updatedBasket[0].items
  }
}

module.exports = saveBasket
