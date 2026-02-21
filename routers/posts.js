const express = require('express')
const router = express.Router();

const posts = require('../data/posts')





//Crud - Create 

router.post('/', (req, res) => {
    res.send('Hai richiesto di creare un nuovo post')
})

//cRud - Read 

router.get('/', (req, res) => {
    res.json(posts);
})

router.get('/:id', (req, res) => {
    res.send(`Stai visualizzando il post: ${req.params.id}`)
})

//crUd - Update 

router.put('/:id', (req, res) => {
    res.send(`Stai chiedendo di modificare l'intero post con id: ${req.params.id}`)
})

//cruD - Delete








module.exports = router;