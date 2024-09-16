const Solicitacao = require('../models/solicitacao.model');

class SolicitacaoController {
    async solicitacao_inserir(req, res) {
        try {
            req.body.data_entrada = new Date(req.body.data_entrada);
            const solicitacao = await Solicitacao.create(req.body);
            if (!solicitacao) return res.status(406).json({ error: 'Erro criação solicitacao.' });
            return res.status(200).json(solicitacao);
        } catch (error) {
            console.log(error);
            return res.status(400).json(error);
        }
    }

    async solicitacao_listar(req, res) {
        try {
            const solicitacao = await Solicitacao.find({}).sort({nome: 1});
            if (!solicitacao) return res.status(406).json({ error: 'Erro lista solicitacao.' });
            return res.status(200).json(solicitacao);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async solicitacao_buscar(req, res) {
        try {
            const { id } = req.params;
            const data = await Solicitacao.findById(id);
            if (!data) return res.status(406).json({ error: 'Erro consulta solicitacao.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async solicitacao_atualizar(req, res) {
        try {
            const solicitacao = await Solicitacao.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (!solicitacao) return res.status(406).json({ error: 'Erro atualização solicitacao.' });
            return res.status(200).json(solicitacao);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async solicitacao_remover(req, res) {
        try {
            const solicitacao = await Solicitacao.findByIdAndDelete(req.params.id);
            if (!solicitacao) return res.status(406).json({ error: 'Erro exclusão solicitacao.' });
            return res.status(200).json(solicitacao);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = SolicitacaoController;

