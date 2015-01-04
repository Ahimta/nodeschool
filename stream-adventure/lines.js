const through2map = require('through2-map'),
      split       = require('split'),
      os          = require('os')

process.stdin
  .pipe(split())
  .pipe(through2map({wantStrings: true}, function (line, index) {
    if (index % 2 == 0) { return (line.toLowerCase() + os.EOL) }
    else                { return (line.toUpperCase() + os.EOL) }
  }))
  .pipe(process.stdout)
