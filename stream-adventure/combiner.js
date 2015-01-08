const through2map = require('through2-map'),
      combine     = require('stream-combiner'),
      split       = require('split')

module.exports = function () {
  h = {}

  combine(
    process.openStdin(),
    split(),
    through2map({wantStrings: true}, function (line) {
      console.log(line)
      return line
    })
  )
}
