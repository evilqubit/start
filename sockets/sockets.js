"use strict";

var server = require('../bin/www');
var io = require('socket.io')(server);

module.exports = function () {

io.on('connection', function(socket){
        socket.on('chat message', function(msg){
               io.emit('chat message', msg);
              });
      });
};
