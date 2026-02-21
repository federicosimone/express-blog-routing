const express = require('express')
const app = express()
const port = 3000

const posts = [
    {
        title: "Guida introduttiva a Node.js",
        content: "Node.js permette di eseguire JavaScript lato server utilizzando il motore V8.",
        image: "/images/express-js.jpeg",
        tags: ["nodejs", "backend", "javascript"]
    },
    {
        title: "Cos'è Express.js",
        content: "Express è un framework minimal per Node.js che semplifica la creazione di API e server web.",
        image: "/images/express.png",
        tags: ["express", "nodejs", "api"]
    },
    {
        title: "Middleware in Express",
        content: "I middleware sono funzioni che intercettano le richieste prima che arrivino alla route finale.",
        image: "/images/middleware.png",
        tags: ["express", "middleware", "backend"]
    },
    {
        title: "Creare una REST API",
        content: "Una REST API permette di gestire risorse tramite metodi HTTP come GET, POST, PUT e DELETE.",
        image: "/images/rest-api.png",
        tags: ["api", "rest", "http"]
    },
    {
        title: "Gestire le route dinamiche",
        content: "Con Express possiamo usare parametri dinamici nelle route, ad esempio /posts/:id.",
        image: "/images/route-dinamiche.png",
        tags: ["routing", "express", "web"]
    }
];

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca/', (req, res) => {
    res.json(posts);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
