var path = require('path'),
    fs   = require('fs'),
    os   = require('os');

var filePath = path.resolve(process.argv[2]);

fs.readFile(filePath, 'utf8', function (err, data) {
  if (err) { console.log('Error opening ' + filePath); }
  else {
    var linesNum = (data.split(os.EOL).length - 1);
    console.log(linesNum);
  }
});
