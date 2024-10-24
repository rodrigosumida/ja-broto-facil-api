const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RelatorioSchema = new Schema({
    temperatura: { type: Number, required: true },
    umidade: { type: Number, required: true },
    distancia: { type: Number, required: true },
    data_hora: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Relatorio', RelatorioSchema, 'relatorios');