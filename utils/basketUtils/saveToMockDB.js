const fakeSessionsDB = require('../fakeSessionsDB')

const saveToMockDB = (sessionID, newBasket) => {
  const updatedDB = fakeSessionsDB.filter(sessionData => {
    if (sessionData.sessionID !== sessionID) {
      return sessionData
    }
  })
  let newSession = { sessionID: sessionID, items: newBasket }
  let newFakeSessionsDB = [...newSession, ...updatedDB]
  console.log(newFakeSessionsDB)
  return newFakeSessionsDB
}
module.exports = saveToMockDB
