var  serialport = require("serialport");
var  SerialPort = require("serialport").SerialPort;
     serialPort = new SerialPort("/dev/tty.usbmodem1431", {
            baudrate: 9600,
            parser: serialport.parsers.readline("\n")
        });

    serialPort.on('open', function () {
        console.log('open');
        serialPort.on('data', function (data) {
            if (data) {
               if (data.indexOf('direction') >= 0) {
                    var dir = data.split(':')[1];
                    console.log(dir);
               }
            }
        });
    });
