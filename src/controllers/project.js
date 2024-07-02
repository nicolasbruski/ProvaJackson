const Project = require('../models/project');

class ProjectController {
    constructor() {
    }
    async criarProjeto(nome, descricao) {
        if (
            nome === undefined
            || descricao === undefined
        ) {
            throw new Error('Nome e descrição precisam ser adicionados');
        }

        const project = await Project.create({
            nome,
            descricao
        });

        return project;
    }

    async alterarProjeto(nome, descricao) {
        if (
            id === undefined
            || nome === undefined
            || descricao === undefined       
        ) {
            throw new Error('Id, nome e descrição precisam ser adicionados');
        }

        const project = await this.buscarPorId(id);

        project.nome = nome;
        project.descricao = descricao;

        project.save();

        return project;
    }

    async buscarPorId(id) {
        if (id === undefined) {
            throw new Error('O ID precisa ser adicionado');
        }
        
        const project = await Project.findByPk(id);

        if (!project) {
            throw new Error('O Projeto não foi encontrado');
        }

        return project;
    }

    

    async deletarProjeto(id) {
        if (id === undefined) {
            throw new Error('O ID precisa ser adicionado');
        }

        const project = await this.buscarPorId(id);

        project.destroy();
    }

    async listarProjetos() {
        return Project.findAll();
    }
}

module.exports = new ProjectController();