var mongoose = require('mongoose');

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
});

module.exports = mongoose.model('User', UserSchema);
