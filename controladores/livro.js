function getLivros (req, res) {
    try {
        res.send("E aê people!!")
    } catch (error) {
        res.send.status(500)
    }
}

module.exports = {
    getLivros
}