var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var Post = require('../models/post.js');
var User = require('../models/user.js');
var Comment = require('../models/comment.js');

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
       if(req.user){
         var obj = {
           id: req.user._id,
           title: req.body.title,
           description: req.body.description
         };

         User.findOne({_id: new ObjectId(obj.id)}, function(error, user){
           var new_post = new Post({
             title: obj.title,
             posted_date: new Date(),
             description: obj.description,
             _author: user.id
           });
           new_post.save(function(error, posted_doc){
                if(error) res.sendStatus(500);
                user.posts.push(new_post);
                user.save(function(error, doc){
                     if(error) res.sendStatus(500);
                     res.sendStatus(200);
                });
           })
         });
       } else {
         res.sendStatus(500);
       }
    })

    .get(function(req, res){
        Post.find({}).sort({posted_date: -1}).populate('_author').exec(function(err, posts){
            if(err) res.send(err);
            res.json(posts);
        });
    });

router.route('/search/:query')
    .get(function(req, res){
        Post.find({title: new RegExp(req.params.query, 'i')})
        .populate("_author")
        .sort({posted_date: 1})
        .exec(function(err, posts){
            res.json(posts);
        });
    });

router.route('/posts/:post_id')
    .get(function(req, res){
        Post.findOne({_id: new ObjectId(req.params.post_id)})
        .lean()
        .populate({
          path: "comments",
          populate: {
            path: "_author",
            model: "User"
          }
        })
        .populate('_author')
        .exec(function(err, post){
            if(req.user){
                User.findOne({_id: new ObjectId(req.user._id)})
                .exec(function(err, user){
                    if(user.last_visited.length >= 3) user.last_visited.pop();
                    if(user.last_visited.indexOf(post._id) == -1){
                        user.last_visited.push(post);
                    }
                    res.json(post);
                    user.save()
                });

            } else {
                if(err) res.send(err);
                res.json(post);
            }
        });
    });

router.route('/comments/:post_id')
    .post(function(req, res){
      /**
       *
       *  Function for creating a new user, and checking if the user is authenticated.
       *
       */
       if(req.user){
         var obj = {
           user_id: req.user._id,
           post_id: req.params.post_id,
           description: req.body.description
         };

         Post.findOne({_id: new ObjectId(obj.post_id)}, function(error, post){
           User.findOne({_id: new ObjectId(obj.user_id)}, function(error, user){
             var new_comment = new Comment({
               description: obj.description,
               posted_date: new Date(),
               _author: user._id,
               _post: post._id
             });

             new_comment.save(function(error, posted_comment){
                   if(error) res.sendStatus(500);
                   post.comments.push(new_comment);
                   post.save(function(error, saved_post){
                       if(error) res.sendStatus(500);
                       user.comments.push(new_comment);
                       user.save(function(err, foo){
                             if(err) res.sendStatus(500);
                             res.sendStatus(200)
                        });
                   })
             });
           });
         });
       } else {
         res.sendStatus(200);
       }
    });

router.route('/users/:user_id')

    .get(function(req, res){
        User.findOne({_id: new ObjectId(req.params.user_id)})
        .populate('posts')
        .populate('comments')
        .populate('last_visited')
        .exec(function(err, user){
            if(err) res.send(err);
            var logged_in;
            if(req.user._id == req.params.user_id){
                logged_in = true;
            } else {
                logged_in = false;
            }
            res.json({user: user, logged_in: logged_in});
        })
    });

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/users/')

    .get(function(req, res){
        if(req.user){
            User.findOne({_id: new ObjectId(req.user._id)})
            .populate('posts')
            .populate('comments')
            .populate('last_visited')
            .exec(function(err, user){
                if(err) res.send(err);
                res.json({user: user, logged_in: true});
            })
        } else {
            res.redirect("/auth/facebook");
        }
    });

module.exports = router;
