const posts = require('../data/posts')

function index(req, res) {
    res.json(posts);
}

function show(req, res) {

    const id = Number(req.params.id);

    if (id < 0) {
        return res.status(400).json({ error: "Error", message: "ID non valido" });
    }

    const result = posts.find(post => post.id == id);

    if (!result) {
        return res.status(404).json({ error: "Not Found", message: "Post non trovato" });
    }

    return res.json(result);

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