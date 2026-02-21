const posts = require('../data/posts')

function index(req, res) {
    res.json(posts);
}

function show(req, res) {
    res.send(`Stai visualizzando il post: ${req.params.id}`)
}

function destroy(req, res) {
    res.send(` Sei sicuro di voler eliminare il post con id: ${req.params.id}? `)
}

const funzioni = {
    index,
    show,
    destroy
}

module.exports = funzioni