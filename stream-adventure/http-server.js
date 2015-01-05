const through2map = require('through2-map'),
      http        = require('http')

const portNumber = parseInt(process.argv[2])

http.createServer(function (req, res) {
  req.pipe(through2map({wantStrings: true}, function (body) {
    return body.toUpperCase()
  })).pipe(res)
}).listen(portNumber)
