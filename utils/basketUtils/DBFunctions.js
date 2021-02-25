const fakeSessionsDB = []



const fetchBasketFromDB = (sessID, itemAdded) => {
    console.log(fakeSessionsDB)
    let liveBasket = itemAdded
    const userBasket = fakeSessionsDB.filter(basket => {
        return basket.sessionID === sessID
    })
    if (userBasket.length === 1) {
        liveBasket = userBasket[0].item
    }
    return liveBasket
}

const saveToMockDB = (sessionID, newBasket) => {
    console.log("inSaveMock")
    const updateBasket = fakeSessionsDB.filter(db => {
        if (db.sessionID === sessionID) {
            return db
        }
    })
    console.log(updateBasket)
    return updateBasket
}

module.exports = fetchBasketFromDB, saveToMockDB
