const duplexer = require('duplexer'),
      through  = require('through')

module.exports = function (counter) {
  countriesCounts = {}

  const input = through(write, end)
  return duplexer(input, counter)

  function write (chunk) {
    countriesCounts[chunk.country] = (countriesCounts[chunk.country] || 0) + 1
  }

  function end() {
    counter.setCounts(countriesCounts)
  }

}
