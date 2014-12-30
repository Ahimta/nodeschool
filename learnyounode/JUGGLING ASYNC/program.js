const concatStream = require('concat-stream'),
      http         = require('http');

const urls = process.argv.slice(2);

var urlsContents = [];
var pendingUrls  = urls.length;

urls.forEach(function (url, i) {
  http.get(url, function (res) {
    res.on('error', console.error);
    res.pipe(concatStream({encoding: 'string'}, function (urlContent) {
      urlsContents[i] = urlContent;
      pendingUrls--;

      if (pendingUrls == 0) {
        urlsContents.forEach(function (urlContent) {
          console.log(urlContent);
        });
      }
    }));
  });
});
