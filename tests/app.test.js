const app = require('../app')
const request = require('supertest')

describe('<POST ITEM TO MICROSERVICE>', () => {
  it('Takes one item for an existing session and returns a success message to the user', () => {
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

    return request(app)
      .post('/api/basket/additem')
      .send(item)
      .then(({ body }) => {
        expect(body.basket).toHaveLength(3)

        expect(body.basket[2]).toHaveProperty('productID', 10)
        expect(body.basket[2]).toHaveProperty('productTitle', 'Item 1')
        expect(body.basket[2]).toHaveProperty('price', 11)
        expect(body.basket[2]).toHaveProperty('weight', 1)
        expect(body.basket[2]).toHaveProperty('deliveryDays', 4)

        body.basket.forEach(item => {
          expect(item).toHaveProperty('productID')
          expect(item).toHaveProperty('productTitle')
          expect(item).toHaveProperty('price')
          expect(item).toHaveProperty('weight')
          expect(item).toHaveProperty('deliveryDays')
        })
      })
  })

  describe('<POST ITEM TO MICROSERVICE>', () => {
    it('Takes one item for a brand new session and returns a success message to the user', () => {
      const item = {
        sessionID: 3,
        item: {
          productID: 20,
          productTitle: 'Item 2',
          price: 200,
          weight: 8,
          deliveryDays: 1
        }
      }

      return request(app)
        .post('/api/basket/additem')
        .send(item)
        .then(({ body }) => {
          expect(body.basket).toHaveLength(1)
          expect(body.basket[0]).toHaveProperty('productID', 20)
          expect(body.basket[0]).toHaveProperty('productTitle', 'Item 2')
          expect(body.basket[0]).toHaveProperty('price', 200)
          expect(body.basket[0]).toHaveProperty('weight', 8)
          expect(body.basket[0]).toHaveProperty('deliveryDays', 1)
        })
    })
  })
})

describe('<DELETE ITEM TO MICROSERVICE>', () => {
  it('Takes one item for an existing session and returns a basket without the removed item to the user', () => {
    const item = {
      sessionID: 1,
      item: {
        productID: 20,
        productTitle: 'Item 2',
        price: 11,
        weight: 1,
        deliveryDays: 4
      }
    }

    return request(app)
      .delete('/api/basket/removeitem')
      .send(item)
      .then(({ body }) => {
        body.basket.forEach(item => {
          expect(item).not.toHaveProperty('productID', 20)
          expect(item).not.toHaveProperty('productTitle', 'item 2')
        })
      })
  })
})

// tetst endpoints
// test 404
// test sending wrong thing - validation
