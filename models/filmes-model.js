const mongoose = require('../database');

const filmeSchema = new mongoose.Schema({
    id: Number,
    filme: String,
    categoria: String,
    descricao: String,
    urlImg: String,
});

module.exports = mongoose.model('Filme', filmeSchema);
