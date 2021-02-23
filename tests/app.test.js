
const app = require('../app');
const request = require('supertest');

describe('', () => {
    it('', () => {
        return request(app)
            .patch('/api/basket/')
            .send({
                id: 1
            })
    })
})

