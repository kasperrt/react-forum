var mongoose = require('mongoose');

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

module.exports = mongoose.model('Post', PostSchema);
