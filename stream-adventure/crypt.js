const crypto = require('crypto')

const password = process.argv[2]

process.stdin
  .pipe(crypto.createDecipher('aes256', password))
  .pipe(process.stdout)
