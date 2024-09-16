const Conjunto = require('../models/conjunto.model');

class ConjuntoController {
    async conjunto_inserir(req, res) {
        try {
            console.log(req.body);
            const conjunto = await Conjunto.create(req.body);
            if (!conjunto) return res.status(406).json({ error: 'Erro criação conjunto.' });
            return res.status(200).json(conjunto);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async conjunto_listar(req, res) {
        try {
            const conjunto = await Conjunto.find({}).sort({nome: 1});
            if (!conjunto) return res.status(406).json({ error: 'Erro lista conjunto.' });
            return res.status(200).json(conjunto);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async conjunto_buscar(req, res) {
        try {
            const { id } = req.params;
            const data = await Conjunto.findById(id);
            if (!data) return res.status(406).json({ error: 'Erro consulta conjunto.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async conjunto_atualizar(req, res) {
        try {
            const conjunto = await Conjunto.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (!conjunto) return res.status(406).json({ error: 'Erro atualização conjunto.' });
            return res.status(200).json(conjunto);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async conjunto_remover(req, res) {
        try {
            const conjunto = await Conjunto.findByIdAndDelete(req.params.id);
            if (!conjunto) return res.status(406).json({ error: 'Erro exclusão conjunto.' });
            return res.status(200).json(conjunto);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async conjunto_adicionar_peca(req, res) {
        try {
            const conjunto = await Conjunto.findById(req.params.id);
            if (!conjunto) return res.status(406).json({ error: 'Conjunto não encontrado.' });

            const novaQuantidade = conjunto.qnt_pecas + 1;

            const operacao = await Conjunto.findByIdAndUpdate(req.params.id, { qnt_pecas: novaQuantidade });
            if (!operacao) return res.status(406).json({ error: 'Erro adicionar peca.' });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async conjunto_remover_peca(req, res) {
        try {
            const conjunto = await Conjunto.findById(req.params.id);
            if (!conjunto) return res.status(406).json({ error: 'Conjunto não encontrado.' });

            const novaQuantidade = conjunto.qnt_pecas - 1;

            const operacao = await Conjunto.findByIdAndUpdate(req.params.id, { qnt_pecas: novaQuantidade });
            if (!operacao) return res.status(406).json({ error: 'Erro remover peca.' });
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = ConjuntoController;

