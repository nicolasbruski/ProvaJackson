const app = require('../src/index')
const request = require('supertest')

describe('ProjectApi', () => {

    it('Deve deletar o projeto', async () => {
        const response = await request(app)

            .post('/api/project')
            .send(1);
        expect(response.statusCode).toBe(204);
    })
}
)