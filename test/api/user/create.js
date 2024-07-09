const app = require('../src/index')
const request = require('supertest')

describe('UserApi', () => {

        it('Deve criar um usuario', async () => {
            const user = {
                name: 'Nicolas',
                email: 'nicolas.bruski@gmail.com',
                password: '123'
            }
            const response = await request(app)
            
            .post('/api/user')
            .send(user);
 
            expect(response.statusCode).toBe(201);
            expect(response.body.name).toEqual(user.name)
            expect(response.body.email).toEqual(user.email)
        })
})

