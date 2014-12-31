const http = require('http'),
      url  = require('url')

const portNumber = process.argv[2]

http.createServer(function (req, res) {
  if (req.method == 'GET') {
    const parsedUrl = url.parse(req.url, true)
    const date      = new Date(parsedUrl.query.iso)

    res.writeHead(200, {'Content-Type': 'application/json'})

    switch (parsedUrl.pathname) {
      case '/api/parsetime':
        res.end(JSON.stringify({
          hour:   date.getHours(),
          minute: date.getMinutes(),
          second: date.getSeconds()
        }))
      case '/api/unixtime':
        res.end(JSON.stringify({
          unixtime: date.getTime()
        }))
      break
    }
  }
}).listen(portNumber)
