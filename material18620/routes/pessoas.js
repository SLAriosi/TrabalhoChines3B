const express = require('express')
const Pessoas = require('./../models/Pessoas')

const router = express.Router()
// Buscar dados - GET
router.get('/', (req, resposta) => {

    // Buscar
    Pessoas.findAll({

    })
        .then((dados) => {
            console.log(dados)
            resposta.send(dados)
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Deu Erro!')
        })

})

// Criar dados - POST
router.post('/', (req, res) => {
    let objSalvar = req.body

    Pessoas.create(objSalvar)
        .then(() => {
            res.send('Criada nova pessoa :p')
        })
        .catch((erro) => {
            console.log('erro')
            console.log(erro)
            res.send('Deu ERRO!!  ;(')
        })
})

// Atualizar dados - PUT
router.put('/', (req, resposta) => {
    let objSalvar = req.body

    // Atualizar
    Pessoas.update(objSalvar, {
        where: {
            id: req.body.id
        }
    })
        .then((res) => {
            resposta.send('Pessoa Atualizada Com Sucesso')
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Deu Erro!')
        })
})

// Deletar dados - DELETE
router.delete('/', (req, resposta) => {

    // Deletar
    Pessoas.destroy({
        where: {
            id: req.body.id
        }
    })
        .then((data) => {
            resposta.send('Pessoa Deletada Com Sucesso')
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Deu Erro!')
        })
})

module.exports = router