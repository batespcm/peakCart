const mockDB = [
  {
    sessionID: 1,
    items: [
      {
        productID: 10,
        productTitle: 'Item 1',
        price: 11,
        weight: 1,
        deliveryDays: 4
      },
      {
        productID: 20,
        productTitle: 'Item 2',
        price: 11,
        weight: 8,
        deliveryDays: 1
      }
    ]
  },
  {
    sessionID: 2,
    items: [
      {
        productID: 10,
        productTitle: 'Item 1',
        price: 11,
        weight: 1,
        deliveryDays: 4
      }
    ]
  }
]

module.exports = mockDB
