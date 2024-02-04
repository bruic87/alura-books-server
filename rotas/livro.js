const { Router } = require("express")
const { getLivros, getLivro, addLivro, patchLivro, deleteLivro } = require("../controladores/livro")
 
const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', addLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)

module.exports = router