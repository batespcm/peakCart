const removeItem = (basket, item) => {
  let updatedBasket = basket.filter(product => {
    if (product.productID !== item.productID) return product
  })

  return updatedBasket
}

module.exports = removeItem
