const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ConjuntoSchema = new Schema({
    nome: { type: String, required: true },
    qnt_pecas: { type: Number, default: 0 }
});

module.exports = mongoose.model('Conjunto', ConjuntoSchema, 'conjunto');