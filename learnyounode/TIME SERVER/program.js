const moment = require('moment'),
      net    = require('net')
      os     = require('os');

const portNumber = process.argv[2];

net.createServer(function (socket) {
  currentDate = moment().format('YYYY-MM-DD HH:mm');
  socket.end(currentDate + os.EOL);
}).listen(portNumber);
