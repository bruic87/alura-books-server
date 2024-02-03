const { getTodosLivros, getLivroPorId, insereLivro } = require("../servicos/livro")

function getLivros (req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.send.status(500)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id
        const livro = getLivroPorId(id)
        res.send(livro)
    } catch (error) {
        res.send.status(500)
    }
}

function addLivro(req, res) {
    try {
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send("Livro adicionado com sucesso!!")
    } catch(error) {
        res.send.status(500)
    }
}

module.exports = {
    getLivros,
    getLivro,
    addLivro
}