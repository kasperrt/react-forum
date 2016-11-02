var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var Post = require('../models/post.js');
var User = require('../models/user.js');

router.use(function(req, res, next) {
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/posts')
    .post(function(req, res){

    })

    .get(function(req, res){
        Post.find(function(error, posts){
            if(error) res.send(error);
            res.json(posts);
        })
    });

router.route('/posts/:post_id')
    .get(function(req, res){
        Post.findOne({_id: new ObjectId(req.params.post_id)}).populate('comments').exec(function(err, post){
            if(err) res.send(err);
            res.json(post);
        });
    });

router.route('/users/:user_id')
    .get(function(req, res){
        User.findOne({_id: new ObjectId(req.params.user_id)}).populate('posts').populate('comments').exec(function(err, user){
            if(err) res.send(err);
            res.json(user);
        })
    });

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

module.exports = router;
