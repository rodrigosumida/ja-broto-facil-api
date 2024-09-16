const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FerramentaSchema = new Schema({
    codigo: { type: String, required: true },
    nome: { type: String, required: true },
    pecas: { type: Array, required: true }
});

module.exports = mongoose.model('Ferramenta', FerramentaSchema, 'ferramenta');