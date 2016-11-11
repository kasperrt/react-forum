var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: String,
  created: { type: Date, default: Date.now },
  last_visited: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    unique: true
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
  facebook_id: {
    type: String,
    unique: true
  }
});

module.exports = mongoose.model('User', UserSchema);
