const { getTodosLivros, getLivroPorId, insereLivro, editarLivro, deletarLivro } = require("../servicos/livro")

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
        
        if ( id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("Item não encontrado")
        }
    } catch (error) {
        res.send.status(500)
    }
}

function addLivro(req, res) {
    try {
        const livroNovo = req.body
        if(req.body.nome) {
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro adicionado com sucesso!!")
    } else {
        res.status(422)
        res.send("Você não informou o nome do livro...")
    }
    } catch(error) {
        res.send.status(500)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id

        if ( id && Number(id)) {
            const body = req.body
            editarLivro(body, id)
            res.send("Item editado com sucesso!!")
    } else {
            res.status(422)
            res.send("Item não encontrado")
    }
    } catch (error) {
        res.send.status(500)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletarLivro(id)
            res.send("Item excluido com sucesso!!")
    } else {
            res.status(422)
            res.send("Item não encontrado")
    }
    } catch (error) {
        res.send.status(500)
    }
}

module.exports = {
    getLivros,
    getLivro,
    addLivro,
    patchLivro,
    deleteLivro
}