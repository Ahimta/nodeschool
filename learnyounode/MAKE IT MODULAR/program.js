var mymodule = require('./mymodule');

var folderPath = process.argv[2];
var extension  = process.argv[3];

mymodule(folderPath, extension, function (err, filesWithExtension) {
  if (err) {
    console.log('Error', err);
  } else {
    filesWithExtension.forEach(function (filename) {
      console.log(filename);
    });
  }
});
