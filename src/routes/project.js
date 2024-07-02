const express = require('express');
const ApiProject = require('../api/project');

const app = express.Router();
app.use(express.json()); 

app.post('/', ApiProject.criarProjeto);
app.put('/:id', ApiProject.alterarProjeto);
app.get('/', ApiProject.listarProjetos);
app.delete('/:id', ApiProject.deletarProjeto);

module.exports = app;