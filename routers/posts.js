const express = require('express')
const router = express.Router();

const posts = require('../data/posts')



router.get('/', (req, res) => {
    res.json(posts);
})

//Crud - Create 

router.get('/:id', (req, res) => {
    res.send(`Stai visualizzando il post: ${req.params.id}`)
})

//cRud - Read 

//crUd - Update 

//cruD - Delete








module.exports = router;