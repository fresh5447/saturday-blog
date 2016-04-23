var express = require('express');
var router = express.Router();

var Post = require('../models/post');

//ENDPOINT IS ACTUALLY /api/posts

router.route('/')
  .get(function(req, res){
    Post.find(function(err, posts){
      if(err){
        console.log("err finding posts", err)
      } else {
        res.json(posts)
      }
    })
  })
  .post(function(req, res){

    console.log("About to create new POST");
    var post = new Post({
      title: req.body.title,
      content: req.body.content,
      img: req.body.img,
    });
    console.log("here is my post: ", post);

    post.save(function(err, post){
      if(err){
        console.log(err)
      } else {
        res.json(post)
      }
    });



  });

module.exports = router;



