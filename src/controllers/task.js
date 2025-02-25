const Task = require('../models/task');

class TaskController {
    constructor() {
    }
    async criarTarefa(titulo, descricao, status, projetoId) {
        if (
            titulo === undefined
            || descricao === undefined
            || status === undefined
            || projetoId === undefined
        ) {
            throw new Error('Título, descrição, status e projetoId precisam ser preenchidos');
        }

        const tarefa = await Task.create({
            titulo,
            descricao,
            status,
            projetoId,
        });

        return tarefa;
    }

    async alterarTarefa(id, titulo, descricao, status, dataConclusao) {
        if (
            id === undefined
            || titulo === undefined
            || descricao === undefined
            || status === undefined
        ) {
            throw new Error('ID, título, descrição e status precisam ser preenchidos');
        }

        const tarefa = await this.buscarTarefaPorId(id);

        tarefa.titulo = titulo;
        tarefa.descricao = descricao;
        tarefa.status = status;
        if (dataConclusao) {
            tarefa.dataConclusao = dataConclusao;
        }

        await tarefa.save();

        return tarefa;
    }

    async buscarTarefaPorId(id) {
        if (id === undefined) {
            throw new Error('O Id precisa ser adicionado');
        }

        const tarefa = await Task.findByPk(id);

        if (!tarefa) {
            throw new Error('A tarefa não foi encontrada');
        }

        return tarefa;
    }

    

    async deletarTarefa(id) {
        if (id === undefined) {
            throw new Error('O ID precisa ser adicionado');
        }

        const tarefa = await this.buscarTarefaPorId(id);

        await tarefa.destroy();
    }

    async listarTarefas() {
        return Task.findAll();
    }
}

module.exports = new TaskController();
