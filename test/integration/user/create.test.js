const service = require('../src/controller/user')
const conexao = require('../src/config/database')

describe("Adicionar usuario", () => {

   beforeAll(async () => {
      this.transaction = await conexao.db.transaction();
   })

   afterAll(() => {
      this.transaction.rollback();
   })

   test("Adicionar usuario", async () => {
      const dataTest = {
         name: "Adicionar usuario",
         email: "usuario1@teste.com",
         password: "12345"
      }

      const { dataValues } = await service.createUser(dataTest.name, dataTest.email, dataTest.password, this.transaction);

      expect(dataValues.name).toBe(dataTest.name)
      expect(dataValues.email).toBe(dataTest.email)
   })
})