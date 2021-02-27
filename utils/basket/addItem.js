const addItem = (storedBasket, newItem) => {
  if (storedBasket === null) {
    return [newItem]
  } else {
    return [...storedBasket, newItem]
  }
}

module.exports = addItem
