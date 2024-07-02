const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET_KEY = 'Item secreto'

class UserController {
    constructor(){
    }
    async criarUsuario(nome, email, senha) {
        if (
            nome === undefined
            || email === undefined
            || senha === undefined
        ) {
            throw new Error('Nome, email e senha são obrigatórios');
        }

        const user = await User.create({ 
            nome, 
            email, 
            senha 
        });

        return user;
    }

    async listarUsuarios() {
        return User.findAll();
    }

    async alterarUsuario(id, nome, email, senha) {
        if (
            id === undefined
            || nome === undefined
            || email === undefined
            || senha === undefined
        ) {
            throw new Error('Id, nome, email e senha precisam ser preenchidos');
        }

        const user = await this.buscarPorId(id);

        user.nome = nome;
        user.email = email;
        user.senha = senha;

        user.save();

        return user;
    }

    async buscarPorId(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const user = await User.findByPk(id);

        if (!user) {
            throw new Error('O usuário não foi encontrado');
        }

        return user;
    }

    async deletarUsuario(id) {
        if (id === undefined) {
            throw new Error('O Id precisa ser adicionado');
        }

        const user = await this.buscarPorId(id);

        user.destroy();
    }

    async login(email, senha) {
        if (!email || !senha) {
            throw new Error('O Email e a senha são obrigatórios');
        }

        const user = await User.findOne({ where: { email }});

        if (!user) {
            throw new Error('O Usuário não foi encontrado');
        }

        const senhaValida = await bcrypt.compare(senha, user.senha);

        if (!senhaValida) {
            throw new Error('A senha está incorreta');
        }

        const jwtToken = jwt.sign({ id: user.id }, JWT_SECRET_KEY);

        return { token: jwtToken }
    }

    async validarToken(token) {
        try {
            const payload = jwt.verify(token, JWT_SECRET_KEY);
            return payload;
        } catch (error) {
            throw new Error('Token incorreto');
        }
    }
}

module.exports = new UserController();