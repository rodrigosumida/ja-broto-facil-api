const Planta = require('../models/planta.model');

class PlantaController {
    async planta_inserir(req, res) {
        try {
            req.body.data_hora = new Date();
            const planta = await Planta.create(req.body);
            console.log(planta);
            if (!planta) return res.status(406).json({ error: 'Erro criação planta.' });
            return res.status(200);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async planta_listar(req, res) {
        try {
            const plantas = await Planta.find({});
            if (!plantas) return res.status(406).json({ error: 'Erro lista planta' });
            return res.status(200).json(plantas)
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = PlantaController;

