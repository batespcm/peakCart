
const app = require('../app');
const request = require('supertest');

describe('', () => {
    it('', () => {
        return request(app)
            .post('/api/basket/')
            .send({
                productID: 1
            }).then(({ body }) => {
                console.log(body, "body in test")
                expect(body).toHaveProperty('errors');
            });
    });
})


