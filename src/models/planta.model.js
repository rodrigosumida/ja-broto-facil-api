const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PlantaSchema = new Schema({
    nome: { type: String, required: true },
    distancia: { type: Number, required: true }
});

module.exports = mongoose.model('Planta', PlantaSchema, 'plantas');