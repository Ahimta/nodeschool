const through2map = require('through2-map')

process.stdin.pipe(through2map({wantStrings: true}, function (str) {
  return str.toUpperCase()
})).pipe(process.stdout)
