var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var Post = require('../models/post.js');
var User = require('../models/user.js');
var Comment = require('../models/comment.js');
var limit = 10;

router.use(function(req, res, next) {
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/posts')
    .post(function(req, res){
      /**
       *
       *  Function for creating a new post, and checking if the user is
       *  authenticated. Saves post in user object, and in the posts
       *  document. This helps "simulate" a relation-database.
       *
       *  Error-codes sent doesn't quite reflect the error that happens, is
       *  mostly to just tell that an error has occured.
       *
       */
       if(req.user && req.body.title !== "" && req.body.description !== ""){
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
                     res.json({posted: posted_doc._id});
                });
           })
         });
       } else {
         res.sendStatus(500);
       }
   });

/*
 * Logs the user out
 */

router.route('/loggout')
   .get(function(req, res){
      req.logout();
      res.sendStatus(200);
   });

/*
 *
 *  RESTApi for fetching all the posts. :page is for what page to show,
 *  :sort_type is what type to sort on, :sort_way is either asc or desc.
 *  :date is for filtering on posted date. If 0, don't filter on date.
 *
 */

router.route('/posts/p/:page/:sort_type/:sort_way/:date')
    .get(function(req, res){
        var skip = req.params.page * limit;
        var sort = {};
        var type;
        switch(req.params.sort_type){
            case "title":
               type = "title";
               break;
            case "date":
               type = "posted_date";
               break;
        }
        switch(req.params.sort_way){
            case "desc":
               sort[type] = -1;
               break;
            case "asc":
               sort[type] = 1;
               break;
        }
        var filter;
        if(req.params.date === "0"){
           filter = {};
        } else {
           var date = new Date(req.params.date);
           date.setHours(0,0,0);
           var less_than = new Date(date);
           less_than = new Date(less_than.setDate(less_than.getDate() + 1));
           filter = {posted_date: {"$gte": date, "$lte": less_than}};
        }
        Post.count(filter, function(err, count){
           Post.find(filter).limit(limit).skip(skip).sort(sort).populate('_author').exec(function(err, posts){
               if(err) res.send(err);
               var more = (skip + posts.length) != count;
               res.json({posts: posts, morePages: more});
           });
        });
    });

 /*
  *
  *  RESTApi for searching through all the posts. :page is for what page to
  *  show, :query is the search query, :sort_type is what type to sort on,
  *  :sort_way is either asc or desc. :date is for filtering on posted date.
  *  If 0, don't filter on date.
  *
  */

router.route('/search/:page/:query/:sort_type/:sort_way/:date')
    .get(function(req, res){
      var skip = req.params.page * limit;
      var sort = {};
      var type;
      switch(req.params.sort_type){
          case "title":
             type = "title";
             break;
          case "date":
             type = "posted_date";
             break;
      }
      switch(req.params.sort_way){
          case "desc":
             sort[type] = -1;
             break;
          case "asc":
             sort[type] = 1;
             break;
      }
      var filter;
      if(req.params.date === "0"){
         filter = {title: new RegExp(req.params.query, 'i')};
      } else {
         var date = new Date(req.params.date);
         date.setHours(0,0,0);
         var less_than = new Date(date);
         less_than = new Date(less_than.setDate(less_than.getDate() + 1));
         filter = {title: new RegExp(req.params.query, 'i'), posted_date: {"$gte": date, "$lte": less_than}};
      }
      Post.count(filter, function(err, count){
         Post.find(filter)
         .populate("_author")
         .limit(limit)
         .skip(skip)
         .sort(sort)
         .exec(function(err, posts){
             var more = (skip + posts.length) != count;
             res.json({posts: posts, morePages: more});
         });
      })
    });

/*
 *
 *  RESTApi for fetching a specific post and its comments.
 *  Parameters here are the same as all other endpoints, but here :date filters
 *  on what comments to show.
 *
 *  Adds visited post to the recently visited column in user collection.
 *
 */

router.route('/posts/:page/:post_id/:sort_way/:date')
    .get(function(req, res){
        try{
            var id = new ObjectId(req.params.post_id)
            var skip = req.params.page * limit;
            var sort = {};
            var type = "posted_date";
            switch(req.params.sort_way){
                case "desc":
                   sort[type] = -1;
                   break;
                case "asc":
                   sort[type] = 1;
                   break;
            }
            var filter;
            if(req.params.date === "0"){
               filter = {_post: id};
            } else {
               var date = new Date(req.params.date);
               date.setHours(0,0,0);
               var less_than = new Date(date);
               less_than = new Date(less_than.setDate(less_than.getDate() + 1));
               filter = {_post: id, posted_date: {"$gte": date, "$lte": less_than}};
            }
            Comment.count(filter, function(err, count){
              Post.findOne({_id: id})
              .lean()
              .populate({
                path: "comments",
                match: filter,
                options: {
                    sort: sort,
                    limit: limit,
                    skip: skip
                },
                populate: {
                  path: "_author",
                  model: "User"
                }
              })
              .populate('_author')
              .exec(function(err, post){
                  var more = (skip + post.comments.length) != count;
                  if(req.user){
                      try{
                          var id = new ObjectId(req.user._id);
                          User.findOne({_id: id})
                          .exec(function(err, user){
                              if(user.last_visited.indexOf(post._id) == -1 || user.last_visited.length == 0){
                                  if(user.last_visited.length >= 3) user.last_visited.pop();
                                  user.last_visited.unshift(post);
                              }
                              res.json({post: post, morePages: more});
                              user.save()
                          });
                      } catch(error){
                          res.sendStatus(404);
                      }
                  } else {
                      if(err) res.sendStatus(404);
                      res.json({post: post, morePages: more});
                  }
              });
            });
        } catch(err){
            res.sendStatus(404);
        }
    });

router.route('/comments/:post_id/')
    .post(function(req, res){
      /**
       *
       *  Function for creating new comment. Links comment to both post
       *  and user object.
       *
       */
       if(req.user && req.body.description !== ""){
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
         res.sendStatus(500);
       }
    });

/*
 * Endpoint to fetch specific user.
 */

router.route('/users/:user_id')

    .get(function(req, res){
        try{
            var id = new ObjectId(req.params.user_id);

            User.findOne({_id: id})
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
            });
        } catch(err){
            res.sendStatus(500);
        }

    });

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

/*
 *  Endpoint to fetch logged in user.
 */

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
