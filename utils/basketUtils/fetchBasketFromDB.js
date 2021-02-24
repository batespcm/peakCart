const fakeSessionsDB = [{ sessionID: 1, item: { productID: 10, productTitle: "Item 1", price: 11, weight: 1, deliveryDays: 4 } }, { sessionID: 2, item: { productID: 20, productTitle: "Item 2", price: 22, weight: 8, deliveryDays: 1 } }]

const fetchBasketFromDB = (sessID, itemAdded) => {
    let liveBasket = itemAdded
    const userBasket = fakeSessionsDB.filter(basket => {
        return basket.sessionID === sessID
    })
    if (userBasket.length === 1) {
        liveBasket = userBasket[0].item
    }
    return liveBasket
}


module.exports = fetchBasketFromDB
