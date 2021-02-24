
const app = require('../app');
const request = require('supertest');


const oneItem = { sessionID: 1, basket: { productID: 10, productTitle: "Item 1", price: 11, weight: 1, deliveryDays: 4 } }

describe('', () => {
    it('', () => {
        return request(app)
            .post('/api/basket/additem')
            .send(oneItem)
        console.log(oneItem)
    });
})


