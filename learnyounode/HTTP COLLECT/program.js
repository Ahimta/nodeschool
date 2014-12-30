const concatStream = require('concat-stream'),
      http         = require('http');

const url = process.argv[2];

http.get(url, function (res) {
  res.on('error', console.error);
  res.pipe(concatStream({encoding: 'string'}, function (content) {
    console.log(content.length);
    console.log(content);
  }));
});
