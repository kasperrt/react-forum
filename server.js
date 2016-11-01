var express = require('express');
var app = express();
var default_port = 3000;
var mongoose = require('mongoose');
var mpromise = require('mpromise');
const assert = require('assert');
mongoose.Promise = global.Promise;
app.use(express.static('build/'));

var url = 'mongodb://localhost/howto';
mongoose.connect(url);

var PostSchema = mongoose.Schema({
  title: String,
  description: String,
  _author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  posted_date: Date
});

var CommentSchema = mongoose.Schema({
  _author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  _post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
  posted_date: Date,
  description: String
})

var UserSchema = mongoose.Schema({
  name: String,
  created: Date,
  last_visited: [{
    type: Number,
    ref: 'Post'
  }],
  image: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  facebook_id: String
})

var Comment = mongoose.model('Comment', CommentSchema);
var Post = mongoose.model('Post', PostSchema);
var User = mongoose.model('User', UserSchema);

//create_user({u_name: "Kasper Rynning-Tønnesen", image: "qowihe", facebook_id: "rynningtoennesen"});
//create_post({title: "testing", description: "testing2", facebook_id: "rynningtoennesen"});
//create_comment({description: "testing", facebook_id: "rynningtoennesen", title: "testing"});
find_user();
find_post();
find_comment();

process.on('uncaughtException', function(error){
  if(error.code == "EACCES"){
    start_listening(default_port);
  } else if(error.code == "EADDRINUSE"){
    default_port = default_port + 1;
    start_listening(default_port);
  }
});

function start_listening(port){
  app.listen(port, function(){
    console.log("listening on port " + port);
  });
}

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
  User.findOne({facebook_id: obj.facebook_id}, function(error, user){
    var new_post = new Post({
      title: obj.title,
      create: new Date(),
      description: obj.description,
      _author: user._id
    });
    new_post.save(function(error, posted_doc){
      user.posts.push(new_post);
      user.save(function(error, doc){
        console.log(doc);
      });
    })
  });
}

function create_comment(obj){

  Post.findOne({title: obj.title}, function(error, post){
    console.log(post);
    User.findOne({facebook_id: obj.facebook_id}, function(error, user){
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

function find_user(){
  User.findOne({name: "Kasper Rynning-Tønnesen"})
  .populate('posts')
  .populate('comments')
  .exec(function(err, person){
    console.log(person);
  });
}

function find_post(){
  Post.findOne({title: "testing"})
  .populate('comments')
  .exec(function(err, post){
    console.log(post);
  });
}

function find_comment(){
  Comment.findOne({description: "testing"})
  .populate('_author')
  .populate('_post')
  .exec(function(err, comment){
    console.log(comment);
  });
}

start_listening(default_port);
