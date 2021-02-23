
const app = require('../app');
const request = require('supertest');

describe('', () => {
    it('', () => {
        return request(app)
            .post('/api/basket/')
            .send({
                id: 1
            })
    })
})

