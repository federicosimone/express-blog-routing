const posts = require('../data/posts')

function index(req, res) {
    res.json(posts);
}

function store(req, res) {

    const newPost = {
        id: posts[posts.length - 1].id + 1,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };
    posts.push(newPost)
    console.log(newPost)
    res.status(201).json(newPost);
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
    destroy,
    store
}

module.exports = funzioni