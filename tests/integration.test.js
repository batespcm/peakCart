const app = require('../app')
const request = require('supertest')
const mockDB = require('../utils/mock_db')

const {
  fetchBasket,
  saveBasket,
  removeItem,
  addItem,
  clearBasket
} = require('../utils/basket')

describe('<ADD ITEM>', () => {
  it('Takes one item for an existing session and returns the existing items in the DB for the sessionID and the additional item', () => {
    const storedBasket = [
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
    const item = {
      sessionID: 1,
      item: {
        productID: 10,
        productTitle: 'Item 1',
        price: 11,
        weight: 1,
        deliveryDays: 4
      }
    }
    const outputExpected = [
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
      },
      {
        sessionID: 1,
        item: {
          productID: 10,
          productTitle: 'Item 1',
          price: 11,
          weight: 1,
          deliveryDays: 4
        }
      }
    ]

    expect(addItem(storedBasket, item)).toEqual(outputExpected)
  })
})

describe('<FETCH BASKET>', () => {
  it('Takes one sessionID and returns the items in the DB for the session', () => {
    const sessionID = 1
    const outputExpected = [
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

    expect(fetchBasket(sessionID)).toEqual(outputExpected)
  })
})

describe('<REMOVE ITEM>', () => {
  it('Takes one sessionID and one item and returns the remaining items in teh basket', () => {
    const basket = [
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
      },
      {
        productID: 10,
        productTitle: 'Item 1',
        price: 11,
        weight: 1,
        deliveryDays: 4
      }
    ]

    const item = {
      productID: 20,
      productTitle: 'Item 2',
      price: 11,
      weight: 1,
      deliveryDays: 4
    }

    const outputExpected = [
      {
        productID: 10,
        productTitle: 'Item 1',
        price: 11,
        weight: 1,
        deliveryDays: 4
      },
      {
        productID: 10,
        productTitle: 'Item 1',
        price: 11,
        weight: 1,
        deliveryDays: 4
      }
    ]

    expect(removeItem(basket, item)).toEqual(outputExpected)
  })
})
