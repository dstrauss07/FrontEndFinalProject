var express = require('express');
var router = express.Router();
let repo = require('../models/postRepository');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('artifact', {title: 'The Hydra', 
  character: repo.getChars()
  });
});

module.exports = router;
