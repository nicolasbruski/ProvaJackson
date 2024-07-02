const express = require('express');
const ApiUser = require('../api/user')

const app = express.Router();
app.use(express.json());

app.post('/', ApiUser.criarUsuario);
app.put('/', ApiUser.alterarUsuario);
app.get('/', ApiUser.listarUsuario);
app.delete('/', ApiUser.deletarUsuario)
app.post('/', ApiUser.validarToken);

app.use(ApiUser.validarToken);

module.exports = app;