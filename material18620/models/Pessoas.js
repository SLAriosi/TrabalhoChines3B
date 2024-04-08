const Sequelize = require('sequelize')
const db = require('./../bancoDeDados/conexao')

const Pessoas = db.define('pessoas', {
    nome: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
})

module.exports = Pessoas