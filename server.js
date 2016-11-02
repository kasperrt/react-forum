var express = require('express');
var app = express();
var default_port = 3000;
var mongoose = require('mongoose');
var mpromise = require('mpromise');
var router = require('./router/router.js');

const assert = require('assert');

mongoose.Promise = global.Promise;
app.use(express.static('build/'));

app.use('/api', router);

var url = 'mongodb://localhost/howto';
mongoose.connect(url);

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
