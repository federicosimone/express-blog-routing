const express = require('express')
const app = express()
const port = 3000

const posts = require("./data/posts")

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