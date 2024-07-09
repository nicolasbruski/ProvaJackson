const service = require('../src/controller/task')
const conexao = require('../src/config/database')

describe("Criar uma Task", () => {

    beforeAll(async () => {
        this.transaction = await conexao.db.transaction();
    })

    afterAll(() => {
        this.transaction.rollback();
    })

    test("Criar uma tarefa", async () => {
        const dataTest = {
            title: "Tarefa",
            description: "Criando tarefa",
            status: "Em andamento",
            idProject: 1,
        }

        const { dataValues } = await service.updateTask(1, dataTest.title, dataTest.description, dataTest.status, dataTest.idProject, dataTest.finalDate, dataTest.currentUser, this.transaction)

        expect(dataValues.title).toBe(dataTest.title)
        expect(dataValues.description).toBe(dataTest.description)
        expect(dataValues.idProject).toBe(dataTest.idProject)

    })
})