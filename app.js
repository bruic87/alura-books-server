const express = require("express")
const rotaLivro = require("./rotas/livros")

const app = express()

app.use('/livros', rotaLivro)

const port = 8000

app.listen(port, () => {
    console.log(`Curiando a porta ${port}`)
})