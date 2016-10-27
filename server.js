var express = require('express');
var app = express();
var port = 80;
var default_port = 3000;

//database stuff
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/users');

app.use(express.static('web/'));

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

start_listening(port);

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});

app.use(function(req,res,next){
    req.db = db;
    next();
});
app.use('/', routes);
app.use('/users', users);

module.exports = server;
