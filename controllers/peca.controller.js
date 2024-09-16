const Peca = require('../models/peca.model');
const Conjunto = require('../models/conjunto.model');

class PecaController {
    async peca_inserir(req, res) {
        try {
            const peca = await Peca.create(req.body);
            console.log(peca);
            if (!peca) return res.status(406).json({ error: 'Erro criação peca.' });

            const conjunto = await Conjunto.findById(req.body.conjunto.toString());
            const novaQuantidade = conjunto.qnt_pecas + 1;

            await Conjunto.findByIdAndUpdate(req.body.conjunto.toString(), { qnt_pecas: novaQuantidade });

            return res.status(200).json(peca);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async peca_atualizar_estoque(req, res) {
        try {
            const { quantidade } = req.body;
            const peca = await Peca.findById(req.params.id);
            if (!peca) return res.status(406).json({ error: 'Peça não encontrada.' });
            
            const novaQuantidade = peca.qnt_estoque + quantidade;

            const operacao = await Peca.findByIdAndUpdate(req.params.id, { qnt_estoque: novaQuantidade });
            if (!operacao) return res.status(406).json({ error: 'Erro atualizar estoque peca.' });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async peca_listar(req, res) {
        try {
            const peca = await Peca.find({});
            if (!peca) return res.status(406).json({ error: 'Erro lista peca.' });
            return res.status(200).json(peca);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async peca_listar_por_quantidade(req, res) {
        try {
            const peca = await Peca.find({}).sort({ qnt_estoque: 1 });
            if (!peca) return res.status(406).json({ error: 'Erro lista peca.' });
            return res.status(200).json(peca);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async peca_buscar(req, res) {
        try {
            const { id } = req.params;
            const data = await Peca.findById(id);
            if (!data) return res.status(406).json({ error: 'Erro consulta peca.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async peca_atualizar(req, res) {
        try {
            const peca = await Peca.findById(req.params.id);
            const { conjunto } = req.body;

            if (conjunto !== peca.conjunto) {
                const conjuntoAntigo = await Conjunto.findById(peca.conjunto.toString());
                const conjuntoNovo = await Conjunto.findById(conjunto.toString());

                const novaQuantidadeAntigo = conjuntoAntigo.qnt_pecas - 1;
                const novaQuantidadeNovo = conjuntoNovo.qnt_pecas + 1;

                await Conjunto.findByIdAndUpdate(conjuntoAntigo._id.toString(), { qnt_pecas: novaQuantidadeAntigo });
                await Conjunto.findByIdAndUpdate(conjuntoNovo._id.toString(), { qnt_pecas: novaQuantidadeNovo });
            }

            const pecaMod = await Peca.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (!pecaMod) return res.status(406).json({ error: 'Erro atualização peca.' });
            return res.status(200).json(pecaMod);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async peca_remover(req, res) {
        try {
            const peca = await Peca.findById(req.params.id);

            const pecaRemover = await Peca.findByIdAndDelete(req.params.id);
            if (!pecaRemover) return res.status(406).json({ error: 'Erro exclusão peca.' });

            const conjunto = await Conjunto.findById(peca.conjunto.toString());
            const novaQuantidade = conjunto.qnt_pecas - 1;

            await Conjunto.findByIdAndUpdate(peca.conjunto.toString(), { qnt_pecas: novaQuantidade });

            return res.status(200).json(peca);
        } catch (error) {
            console.log(error);
            return res.status(400).json(error);
        }
    }
}

module.exports = PecaController;

