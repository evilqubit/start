
var server = require('../bin/www');
var io = require('socket.io')(server);
var serialport = require("serialport");
var SerialPort = require("serialport").SerialPort;
    serialPort = new  SerialPort("/dev/tty.usbmodem1431", {
            baudrate: 9600,
            parser: serialport.parsers.readline("\n")
        });

    
module.exports = function () {
  serialPort.on('open', function () {
        console.log('open');
        serialPort.on('data', function (data) {
            if (data) {
               if (data.indexOf('direction') >= 0) {
                    var dir = data.split(':')[1];
                    console.log(dir);
               //io.on('connection', function(socket){
             //  socket.on('chat message', function(msg){
               io.emit('chat message', dir);
              //});
     // });

               }
            }
        });
    });

};
