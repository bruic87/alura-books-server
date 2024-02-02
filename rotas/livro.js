const { Router } = require("express")
const { getLivros } = require("../controladores/livro")
 
const router = Router()

router.get('/', getLivros)

router.post('/', (req, res) => {
    res.send("Requisição POST efetuada com sucesso!")
})

router.patch('/', (req, res) => {
    res.send("Requisição PATCH efetuada com sucesso!")
})

router.delete('/', (req, res) => {
    res.send("Requisição DELETE efetuada com sucesso!")
})

module.exports = router