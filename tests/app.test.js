const app = require('../app')
const request = require('supertest')

describe('<POST ITEM TO MICROSERVICE>', () => {
  it('Takes one item for a brand new session and returns a success message to the user', () => {
    const item = {
      sessionID: 1,
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
    return request(app)
      .post('/api/basket/additem')
      .send(item)
      .then(({ body }) => {
        console.log(body.basket[0], 'body')
        expect(body.basket).toHaveProperty('productID')
        // expect(basket[0]).toHaveProperty('productTitle')
        // expect(basket[0]).toHaveProperty('price')
        // expect(basket[0]).toHaveProperty('weight')
        // expect(basket[0]).toHaveProperty('quantity')
        // expect(basket[0]).toHaveProperty('deliveryDays')
      })
  })

  describe('<POST ITEM TO MICROSERVICE>', () => {
    it('Takes one item for a brand new session and returns a success message to the user', () => {
      const item = {
        sessionID: 3,
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
      return request(app)
        .post('/api/basket/additem')
        .send(item)
        .then(({ body }) => {
          console.log(body[0])
          const { basket } = body
          // console.log(basket, 'basket in test')
          expect(basket).toHaveProperty('productID')
          expect(basket).toHaveProperty('productTitle')
          expect(basket).toHaveProperty('price')
          expect(basket).toHaveProperty('weight')
          expect(basket).toHaveProperty('quantity')
          expect(basket).toHaveProperty('deliveryDays')
        })
    })
  })
})

// tetst endpoints
// test 404
// test sending wrong thing - validation
