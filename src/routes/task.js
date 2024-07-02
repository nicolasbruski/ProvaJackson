const express = require('express');
const ApiTask = require('../api/task');

const app = express.Router();
app.use(express.json());

app.post('/', ApiTask.criarTarefa);
app.put('/:id', ApiTask.alterarTarefa);
app.get('/', ApiTask.listarTarefas);
app.delete('/:id', ApiTask.deletarTarefa);

module.exports = app;