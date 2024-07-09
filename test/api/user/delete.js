const app = require('../src/index')
const request = require('supertest')

describe('Delete user', () => {
        it('Deletar usuario', async () => {
            const response = await request(app)
            .delete('/api/user/1');
            expect(response.statusCode).toBe(204);
        })
})

