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

router.patch('/:id', (req, res) => {
    res.send(`Stai chiedendo di modificare parte del post con id: ${req.params.id}`)
})

//cruD - Delete

router.delete('/:id', (req, res) => {
    res.send(` Sei sicuro di voler eliminare il post con id: ${req.params.id}? `)
})








module.exports = router;