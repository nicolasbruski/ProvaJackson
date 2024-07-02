const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root', 
  database: 'project-manager', 
});

module.exports = sequelize;
