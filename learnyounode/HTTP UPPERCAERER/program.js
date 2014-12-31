const thorugh2Map = require('through2-map'),
      http        = require('http');

const portNumber = process.argv[2];

http.createServer(function (req, res) {
  if (req.method == 'POST') {
    req.pipe(thorugh2Map({wantStrings: true}, function (chunk) {
      return chunk.toUpperCase();
    })).pipe(res);
  }
}).listen(portNumber);
