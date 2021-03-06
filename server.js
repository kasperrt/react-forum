var express = require('express');
var app = express();
var default_port = 3000;
var mongoose = require('mongoose');
var mpromise = require('mpromise');
var router = require('./router/router.js');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var bodyParser = require('body-parser');
var Cookies = require('cookies');
//var json = require('express-json');
var session = require('express-session');

var User = require('./models/user.js');
var ObjectId = require('mongoose').Types.ObjectId;
var config = require('./config/facebook.js');

const assert = require('assert');

mongoose.Promise = global.Promise;
var url = 'mongodb://localhost/howto';
mongoose.connect(url);

/*
 * Find and update user on every login, to handle profile-picture/namechanges
 */

passport.use(new FacebookStrategy({
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'picture', 'email']
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOneAndUpdate({facebook_id: profile.id}, {
      $set:{
        name: profile.displayName,
        facebook_id: profile.id,
        image: "http://graph.facebook.com/" + profile.id + "/picture?height=400"
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

app.use(bodyParser());

/*
 * Connecting sessions with mongoDB to keep sessions more persistend, and not
 * volume dependend. Makes it easier to containerbase app.
 */

app.use(session({
  secret: 'a4f8071f-c873-4447-8ee2',
  cookie: { maxAge: 2628000000 },
  store: new (require('express-sessions'))({
      storage: 'mongodb',
      instance: mongoose,
      host: 'localhost',
      port: 27017,
      db: 'howto',
      collection: 'sessions',
      expire: 86400
  })
}));

/*
 * Allows access from outside connections.
 */

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

/*
 *
 * Function for initializing passport, and initializing session for passport.
 * Bottom function is for creating httpOnly: false cookie, for allowing frontend
 * to access and see cookie-object.
 *
 */

app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
  var cookies = new Cookies( req, res )
  var cookie = cookies.get('user');
  if (cookie === undefined && req.user) {
    cookies.set('user', req.user.facebook_id, {
      httpOnly: false,
      maxAge: 0
    });
  }
  next();
});

/*
 * Implements use of seperate file for routing.
 */
app.use('/api', router);

app.get('/auth/facebook', passport.authenticate('facebook'));

/*
 * "Static" link to profile, used for checking whether the user is logged in, or
 * not.
 */

app.get('/profile', function(req, res){
  if(req.user){
    res.redirect("/#/user/" + req.user._id);
  } else {
    req.session.last_url = "/#/user/";
    res.redirect("/auth/facebook");
  }
});

/*
 * Handler for facebook-callback
 */

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    if(req.session.last_url){
      var tmp = req.session.last_url;
      delete req.session.last_url;
      res.redirect(tmp);
    } else {
      res.redirect('/');
    }
  });

app.use("/external_css/react-datepicker.css", function(req, res){
  res.sendFile(__dirname + "/node_modules/react-datepicker/dist/react-datepicker.min.css");
});
app.use(express.static('build/'));

/**
 *
 *  Failsafe for port not available, and reverting to default port.
 *
 */

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

start_listening(80);
