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
    const id = Number(req.params.id);

    if (id < 0) {
        return res.status(400).json({ error: "Error", message: "ID non valido" });
    }

    const result = posts.find(post => post.id == id);

    if (!result) {
        return res.status(404).json({ error: "Not Found", message: "Post non trovato" });
    }

    posts.splice(posts.indexOf(result), 1)

    console.log(posts);

    return res.sendStatus(204);
}

const funzioni = {
    index,
    show,
    destroy
}

module.exports = funzioni