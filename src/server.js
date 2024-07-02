const sequelize = require('./config/database');
const app = require('./app');

sequelize.sync({ force: false }) 
  .then(() => {
    console.log('Banco de dados funcionando corretamente.');
    app.listen(3001, () => {
      console.log('Servidor rodando na porta 3001');
    });
  })
  .catch((err) => {
    console.error('Erro ao sincronizar:', err);
  });