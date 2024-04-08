const express = require('express')
const Jobs = require('./../models/Jobs')
const Lanches = require('./../models/Lanches')

const router = express.Router()

router.get('/', (requisicao, resposta) => {

    let novoTrabalho = {
        titulo: 'Atendente',
        salario: '4000',
        empresa: 'Ariosi Lanches',
        descricao: 'Melhor lanchonete da metropoli Xambre',
        email: 'ariosilanches@ariosi.com',
        novo_trabalho: '0'
    }

    // Criar
    // Jobs.create(novoTrabalho)
    //     .then(() => {
    //         resposta.send('Nova vaga criada!')
    //     })
    //     .catch((erro) => {
    //         console.log(erro)
    //         resposta.send('Deu Erro!')
    //     })


    // Buscar
    // Jobs.findAll({
    //     where: {
    //         id: 1
    //     }
    // })
    //     .then((res) => {
    //         console.log(res)
    //         resposta.send(res)
    //     })
    //     .catch((erro) => {
    //         console.log(erro)
    //         resposta.send('Deu Erro!')
    //     })



    // Atualizar
    // Jobs.update({ titulo: 'Scrum Master' }, {
    //     where: {
    //         id: 1
    //     }
    // })
    //     .then((res) => {
    //         resposta.send('Atualizado Com Sucesso')
    //     })
    //     .catch((erro) => {
    //         console.log(erro)
    //         resposta.send('Deu Erro!')
    //     })

    // CRUD
    // Create
    // Read
    // Update
    // Delete

    // Deletar
    Jobs.destroy({
        where: {
            id: 1
        }
    })
        .then((data) => {
            resposta.send('Deletado Com Sucesso')
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Deu Erro!')
        })

})


router.post('/teste', (requisicao, resposta) => {
    resposta.send('Teste Nodemon REQ')
})
// http://localhost:3001/teste

router.get('/lanches', (req, res) => {
    let objSalvar = {
        nome: 'X-bacon'
    }

    Lanches.create(objSalvar)
        .then(() => {
            res.send('Criado novo lanche :p')
        })
        .catch((erro) => {
            console.log('erro')
            console.log(erro)
            res.send('Deu ERRO!!  ;(')
        })
})

module.exports = router