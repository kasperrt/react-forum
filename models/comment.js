var mongoose = require('mongoose');

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
});

module.exports = mongoose.model('Comment', CommentSchema);
