const service = require('../src/controller/user')
const conexao = require('../src/config/database')

describe("Listar usuarios", () => {

   beforeAll(async () => {
      this.transaction = await conexao.db.transaction();
   })

   afterAll(() => {
      this.transaction.rollback();
   })

   test("Listar usuarios", async () => {
      const request = await service.listUsers()
      expect(request.length).toBeGreaterThan(0)
   })
})