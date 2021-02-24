const addItem = (currentBasket, newItem) => {
    console.log(currentBasket, "currentBask")
    let newBasket = {}
    newItem.quantity = 1
    console.log(newItem, "newItem should have a quantity")
    if (currentBasket.productID.quantity === newItem.productID) {
        newBasket = currentBasket
    } else {
        newbasket = { ...currentBasket, ...newItem }
    }
    console.log(newBasket, "outputBasket")
    return newBasket
}

module.exports = addItem