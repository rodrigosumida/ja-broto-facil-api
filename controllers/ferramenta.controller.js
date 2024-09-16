const Ferramenta = require('../models/ferramenta.model');

class FerramentaController {
    async ferramenta_inserir(req, res) {
        try {
            console.log(req.body);
            const ferramenta = await Ferramenta.create(req.body);
            if (!ferramenta) return res.status(406).json({ error: 'Erro criação ferramenta.' });
            return res.status(200).json(ferramenta);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async ferramenta_listar(req, res) {
        try {
            const ferramenta = await Ferramenta.find({}).sort({nome: 1});
            if (!ferramenta) return res.status(406).json({ error: 'Erro lista ferramenta.' });
            return res.status(200).json(ferramenta);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async ferramenta_buscar(req, res) {
        try {
            const { id } = req.params;
            const data = await Ferramenta.findById(id);
            if (!data) return res.status(406).json({ error: 'Erro consulta ferramenta.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async ferramenta_atualizar(req, res) {
        try {
            const ferramenta = await Ferramenta.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (!ferramenta) return res.status(406).json({ error: 'Erro atualização ferramenta.' });
            return res.status(200).json(ferramenta);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async ferramenta_remover(req, res) {
        try {
            const ferramenta = await Ferramenta.findByIdAndDelete(req.params.id);
            if (!ferramenta) return res.status(406).json({ error: 'Erro exclusão ferramenta.' });
            return res.status(200).json(ferramenta);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = FerramentaController;

