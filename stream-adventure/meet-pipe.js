const path = require('path'),
      fs   = require('fs')

const filePath   = path.resolve(process.argv[2])
const fileStream = fs.createReadStream(filePath)

fileStream.pipe(process.stdout)
