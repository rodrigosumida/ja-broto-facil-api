const Relatorio = require('../models/relatorio.model');

class RelatorioController {
    async relatorio_inserir(req, res) {
        try {
            req.body.data_hora = new Date();
            const relatorio = await Relatorio.create(req.body);
            console.log(relatorio);
            if (!relatorio) return res.status(406).json({ error: 'Erro criação relatorio.' });
            return res.status(200);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async relatorio_listar(req, res) {
        try {
            const relatorios = await Relatorio.find({}).sort({ data_hora: -1 });
            if (!relatorios) return res.status(406).json({ error: 'Erro lista relatorio' });
            return res.status(200).json(relatorios)
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = RelatorioController;

