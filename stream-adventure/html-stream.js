const through2map = require('through2-map'),
      trumpet     = require('trumpet')

const tr = trumpet()

process.stdin.pipe(tr).pipe(process.stdout)

tr.select('.loud').createStream()
  .pipe(through2map({wantStrings: true}, function (input) {
    return input.toUpperCase()
  }))
