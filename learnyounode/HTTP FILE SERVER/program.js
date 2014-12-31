const http = require('http'),
      path = require('path'),
      fs   = require('fs');

const portNumber = process.argv[2];
const filePath   = path.resolve(process.argv[3]);

http.createServer(function (req, res) {
  const fileStream = fs.createReadStream(filePath);
  res.writeHead(200);
  fileStream.pipe(res);
}).listen(portNumber);
