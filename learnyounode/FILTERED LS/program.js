var path = require('path'),
    fs   = require('fs');

var folderPath = path.resolve(process.argv[2]);
var extension  = ('.' + process.argv[3]);

fs.readdir(folderPath, function (err, list) {
  list.filter(function (filename) {
    return (path.extname(filename) === extension);
  }).forEach(function (filename) {
    console.log(filename);
  });
});
