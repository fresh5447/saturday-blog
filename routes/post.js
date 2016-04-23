var express = require('express');
var router = express.Router();

var Post = require('../models/post');

//ENDPOINT IS ACTUALLY /api/posts

router.route('/')
  .get(function(req, res){
    res.json({message: "Post Router Hooked Up"})
  });

module.exports = router;



