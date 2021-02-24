
const app = require('../app');
const request = require('supertest');



describe('<POST ITEM TO MICROSERVICE>', () => {
    it('Takes one item for a brand new session and returns a success message to the user', () => {
        const item = { sessionID: 1, item: { productID: 10, productTitle: "Item 1", price: 11, weight: 1, deliveryDays: 4 } }
        return request(app)
            .post('/api/basket/additem')
            .send(item)
            .send(item)
            .then(({ body }) => {
                console.log(body)
                const { basket } = body
                expect(basket).toHaveProperty('productID');
                expect(basket).toHaveProperty('productTitle');
                expect(basket).toHaveProperty('price');
                expect(basket).toHaveProperty('weight');
                expect(basket).toHaveProperty('quantity');
                expect(basket).toHaveProperty('deliveryDays');

            });


    });
})


