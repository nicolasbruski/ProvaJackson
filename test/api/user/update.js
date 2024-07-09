const app = require('../src/index')
const request = require('supertest')

describe('Altera usuario', () => {

    beforeAll(async () => {
        console.log('Começa os testes')
    })

    afterAll(async () => {
        console.log('Acaba os testes')
    })

    it('Precisa alterar os usuarios', async () => {
        const user = {
            name: 'Nicolau',
            email: 'nicolauu@gmail.com',
            password: '123456'
        }
        const response = await request(app)
            .put('/api/user/1')
            
            .send(user);

        expect(response.statusCode).toBe(200);
        expect(response.body.name).toEqual(user.name)
        expect(response.body.email).toEqual(user.email)
    })
}
)

