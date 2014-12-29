var path = require('path'),
    fs   = require('fs');

module.exports = function (folderPath, extention, callback) {
  resolvedPath = path.resolve(folderPath);
  fs.readdir(resolvedPath, function (err, list) {
    if (err) {
      return callback(err);
    } else {
      var filesWithExtension = list.filter(function (filename) {
        return path.extname(filename) == ('.' + extention);
      });
      return callback(null, filesWithExtension);
    }
  });
};
