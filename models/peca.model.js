const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PecaSchema = new Schema({
    codigo: { type: String, required: true },
    nome: { type: String, required: true },
    conjunto: { type: Schema.Types.ObjectId, ref: 'Conjunto' },
    localizacao: { type: String, required: true },
    qnt_estoque: { type: Number, required: true }
});

module.exports = mongoose.model('Peça', PecaSchema, 'pecas');