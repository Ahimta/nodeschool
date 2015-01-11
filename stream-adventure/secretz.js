const through2map = require('through2-map'),
      crypto      = require('crypto'),
      zlib        = require('zlib'),
      tar         = require('tar'),
      os          = require('os')

const cypherName = process.argv[2],
      passphrase = process.argv[3],
      parser     = tar.Parse()

parser.on('entry', function (entry) {
  if (entry.type === 'File') {
    entry
      .pipe(crypto.createHash('md5', {encoding: 'hex'}))
      .pipe(through2map(function (hash) {
        console.log(hash + ' ' + entry.path)
      }))
  }
})

process.stdin
  .pipe(crypto.createDecipher(cypherName, passphrase))
  .pipe(zlib.createGunzip())
  .pipe(parser)
