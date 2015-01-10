const through2map = require('through2-map'),
      trumpet     = require('trumpet')

const tr              = trumpet()
const selectionStream = tr.select('.loud').createStream()

process.stdin
  .pipe(tr)
  .pipe(process.stdout)

selectionStream
  .pipe(through2map({wantStrings: true}, function (input) {
    return input.toUpperCase()
  }))
  .pipe(selectionStream)
