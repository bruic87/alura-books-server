const { Router } = require("express")
const { getLivros, getLivro, addLivro } = require("../controladores/livro")
 
const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', addLivro)

router.patch('/', (req, res) => {
    res.send("Requisição PATCH efetuada com sucesso!")
})

router.delete('/', (req, res) => {
    res.send("Requisição DELETE efetuada com sucesso!")
})

module.exports = router