const app = require('../src/index')
const request = require('supertest')

describe('TaskApi', () => {

        it('Criar uma tarefa', async () => {
            const dataTest = {
                title: "Tarefa",
                description: "Descrição",
                status: "Em andamento",
                idProject: 1
             }
             
            const response = await request(app)
            
            .post('/api/task')
            .send(dataTest);
 
            expect(response.statusCode).toBe(201);
            expect(response.body.title).toEqual(dataTest.title)
            expect(response.body.description).toEqual(dataTest.description)
            expect(response.body.status).toEqual(dataTest.status)
            expect(response.body.idProject).toEqual(dataTest.idProject)

        })
})

