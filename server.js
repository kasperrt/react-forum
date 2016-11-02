var express = require('express');
var app = express();
var default_port = 3000;
var mongoose = require('mongoose');
var mpromise = require('mpromise');
var router = require('./router/router.js');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var bodyParser = require('body-parser');
//var json = require('express-json');
var session = require('express-session');
var User = require('./models/user.js');
var ObjectId = require('mongoose').Types.ObjectId;
var config = require('./config/facebook.js');

const assert = require('assert');

mongoose.Promise = global.Promise;
var url = 'mongodb://localhost/howto';
mongoose.connect(url);

passport.use(new FacebookStrategy({
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'picture', 'email']
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOneAndUpdate({facebook_id: profile.id}, {
      $set:{
        name: profile.displayName,
        facebook_id: profile.id,
        image: profile.photos[0].value
      }
    }, {upsert: true, new: true}, function(err, user) {

       return cb(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({"_id": new ObjectId(id)}, function(err, user){
    done(null, user);
  });
});

app.use(express.static('build/'));
app.use(bodyParser());
app.use(session({
  secret: 'a4f8071f-c873-4447-8ee2',
  cookie: { maxAge: 2628000000 },
  store: new (require('express-sessions'))({
      storage: 'mongodb',
      instance: mongoose, // optional
      host: 'localhost', // optional
      port: 27017, // optional
      db: 'howto', // optional
      collection: 'sessions', // optional
      expire: 86400 // optional
  })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/api', router);
app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/profile', function(req, res){
  if(req.user){
    res.redirect("/user/" + req.user._id);
  } else {
    res.redirect("/auth/facebook");
  }
});

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

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

start_listening(default_port);
