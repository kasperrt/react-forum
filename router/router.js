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
      /**
       *
       *  Function for creating a new post, and checking if the user is authenticated.
       *
       */
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

router.route('/comments/:post_id')
    .post(function(req, res){
      /**
       *
       *  Function for creating a new user, and checking if the user is authenticated.
       *
       */
    });

router.route('/users/:user_id')
    .post(function(req, res){
      /**
       *
       *  Function for creating a new user, and checking if the user is authenticated.
       *
       */
    })

    .get(function(req, res){
        User.findOne({_id: new ObjectId(req.params.user_id)}).populate('posts').populate('comments').exec(function(err, user){
            if(err) res.send(err);
            res.json(user);
        })
    });

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

//create_user({u_name: "Kasper Rynning-Tønnesen", image: "qowihe", facebook_id: "rynningtoennesen"});
//create_post({title: "testing", description: "testing2", facebook_id: "rynningtoennesen"});
//create_comment({description: "testing", facebook_id: "rynningtoennesen", title: "testing"});


function create_user(obj){
  var new_user = new User({
    name: obj.u_name,
    created: new Date(),
    image: obj.image,
    facebook_id: obj.facebook_id
  });

  new_user.save();
}

function create_post(obj){
  User.findOne({_id: new ObjectId(obj.id)}, function(error, user){
    var new_post = new Post({
      title: obj.title,
      create: new Date(),
      description: obj.description,
      _author: user._id
    });
    new_post.save(function(error, posted_doc){
      user.posts.push(new_post);
      user.save(function(error, doc){
      });
    })
  });
}

function create_comment(obj){
  Post.findOne({_id: new ObjectId(obj.post_id)}, function(error, post){
    User.findOne({_id: new ObjectId(obj.user_id)}, function(error, user){
      var new_comment = new Comment({
        description: obj.description,
        posted_date: new Date,
        _author: user._id,
        _post: post._id
      });

      new_comment.save(function(error, posted_comment){
        post.comments.push(new_comment);
        post.save(function(error, saved_post){
          user.comments.push(new_comment);
          user.save();
        })
      });
    });
  });
}

module.exports = router;
