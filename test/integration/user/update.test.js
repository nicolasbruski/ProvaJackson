const service = require('../src/controller/user')
const conexao = require('../src/config/database')

describe("Editar usuarios", () => {

   beforeAll(async () => {
      this.transaction = await conexao.db.transaction();
   })

   afterAll(() => {
      this.transaction.rollback();
   })

   test("Editar usuarios", async () => {
      const dataTest = {
         name: "usuario editado",
         email: "usuarioeditado@teste.com",
         password: "123456"
      }

      const { dataValues } = await service.changeUser(1,dataTest.name, dataTest.email, dataTest.password, this.transaction);

      expect(dataValues.name).toBe(dataTest.name)
      expect(dataValues.email).toBe(dataTest.email)
      
   })
})