const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {

  res.send('this is user page')
})

router.get('/about', (req, res) => {

  res.send('this is user about page')
})

module.exports = router;
