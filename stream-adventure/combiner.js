const through = require('through')
      combine = require('stream-combiner'),
      split   = require('split'),
      zlib    = require('zlib'),
      os      = require('os')

module.exports = function () {

  const grouper = through(write, end)

  return combine(split(), grouper, zlib.createGzip())

  var currentGenre = null

  function write (line) {
    if (line.length === 0) { return }

    const json = JSON.parse(line)
    const currentType = json['type']

    if (currentType === 'genre') {
      if (currentGenre) {
        this.queue(JSON.stringify(currentGenre) + os.EOL)
      }
      currentGenre = {name: json['name'], books: []}
    }
    else if (currentType === 'book') {
      currentGenre.books.push(json['name'])
    }
  }

  function end () {
    if (currentGenre) {
      this.queue(JSON.stringify(currentGenre) + os.EOL)
    }
    this.queue(null)
  }
}
