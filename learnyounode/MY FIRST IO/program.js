var path = require('path'),
    fs   = require('fs'),
    os   = require('os');

var filePath = path.resolve(process.argv[2]);
var content  = fs.readFileSync(filePath, 'utf8');
var linesNum = (content.split(os.EOL).length - 1);

console.log(linesNum);
