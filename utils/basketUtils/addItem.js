const addItem = (storedBasket, addedItem) => {
  let updatedBasket
  if (storedBasket.length === 0) {
    updatedBasket = addedItem
  } else {
    for (let i = 0; i < storedBasket.length; i++) {
      for (let j = 0; j < storedBasket.length; j++) {
        const storedItems = storedBasket[j].items
        updatedBasket = [...storedItems, ...addedItem]
      }
    }
  }
  return updatedBasket
}

module.exports = addItem
