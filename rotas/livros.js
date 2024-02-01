const { Router } = require("express")

const router = Router()

router.get('/', (req, res) => {
    res.send("E aê people!!")
})

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