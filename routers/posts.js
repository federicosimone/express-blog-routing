const express = require('express')
const router = express.Router();


const postsController = require("../controllers/postsController")


//Crud - Create 

router.post('/', (req, res) => {

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
})

//cRud - Read 

router.get('/', postsController.index)

router.get('/:id', postsController.show)

//crUd - Update 

router.put('/:id', (req, res) => {
    res.send(`Stai chiedendo di modificare l'intero post con id: ${req.params.id}`)
})

router.patch('/:id', (req, res) => {
    res.send(`Stai chiedendo di modificare parte del post con id: ${req.params.id}`)
})

//cruD - Delete

router.delete('/:id', postsController.destroy)








module.exports = router;