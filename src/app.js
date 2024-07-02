const express = require('express');
const authMiddlware = require('./middlewares/authMiddleware');
const app = express();
const userRoutes = require('./routes/user');
const projectRoutes = require('./routes/project');
const taskRoutes = require('./routes/task');
const ApiUser = require('./api/user')

app.use(express.json());

app.post('/api/login', ApiUser.login);
app.post('/api/user', ApiUser.criarUsuario);
app.post('/api/login', authMiddlware.validarToken);
app.use('/api/user', userRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/task', taskRoutes);

module.exports = app;
