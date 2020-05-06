const express = require('express');
let Post = require('../models/Post.model')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const fetchedPosts = await Post.find()
    res.send(fetchedPosts)
  } catch (err) {
    res.json({
      message: err
    })

  }

})

router.post('/', function (req, res) {

  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })

  post.save()
    .then(data => res.json(data))
    .catch(error => console.log(error))

})


module.exports = router;
