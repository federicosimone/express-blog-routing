const posts = [
    {
        id: 1,
        title: "Guida introduttiva a Node.js",
        content: "Node.js permette di eseguire JavaScript lato server utilizzando il motore V8.",
        image: "/images/express-js.jpeg",
        tags: ["nodejs", "backend", "javascript"]
    },
    {
        id: 2,
        title: "Cos'è Express.js",
        content: "Express è un framework minimal per Node.js che semplifica la creazione di API e server web.",
        image: "/images/express.png",
        tags: ["express", "nodejs", "api"]
    },
    {
        id: 3,
        title: "Middleware in Express",
        content: "I middleware sono funzioni che intercettano le richieste prima che arrivino alla route finale.",
        image: "/images/middleware.png",
        tags: ["express", "middleware", "backend"]
    },
    {
        id: 4,
        title: "Creare una REST API",
        content: "Una REST API permette di gestire risorse tramite metodi HTTP come GET, POST, PUT e DELETE.",
        image: "/images/rest-api.png",
        tags: ["api", "rest", "http"]
    },
    {
        id: 5,
        title: "Gestire le route dinamiche",
        content: "Con Express possiamo usare parametri dinamici nelle route, ad esempio /posts/:id.",
        image: "/images/route-dinamiche.png",
        tags: ["routing", "express", "web"]
    }
];

module.exports = posts; 