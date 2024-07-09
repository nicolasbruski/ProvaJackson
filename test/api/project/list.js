const app = require('../src/index')
const request = require('supertest')

describe('ProjectApi', () => {

    it('Deve listar os projetos', async () => {
        const response = await request(app)

            .get('/api/project')

        expect(response.statusCode).toBe(200);
        expect(response.body).toGreaterThan(0)

    })
})