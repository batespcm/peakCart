
const app = require('../app');
const request = require('supertest');

describe('', () => {
    it('', () => {
        return request(app)
            .get('/api')
            .expect(200)
            .then(({ body }) => {
                console.log(body, "body console.log")
                // expect(body).toHaveProperty('GET /api');

            })
    })

});