const app = require('../src/index')
const request = require('supertest')

describe('List', () => {
    
        beforeAll(async () => {
            console.log('Começa os testes')
        })
    
        afterAll(async () => {
            console.log('Acabam os testes')
        })
    
        it('Listar usuarios', async () => {
            const response = await request(app)
                .get('/api/user')
    
            expect(response.statusCode).toBe(200);
        })
})