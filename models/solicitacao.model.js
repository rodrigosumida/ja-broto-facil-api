const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SolicitacaoSchema = new Schema({
    codigo: { type: String, required: true },
    ferramentas: { type: Array, required: true },
    data_entrada: { type: Date, required: true },
    status: { type: String, enum: ["AGUARDANDO APROVAÇÃO", "APROVADA", "REPROVADA", "CONCLUÍDA", "CANCELADA"], default: "AGUARDANDO APROVAÇÃO" },
    justificativa: { type: String }
});

module.exports = mongoose.model('Solicitação', SolicitacaoSchema, 'solicitacoes');