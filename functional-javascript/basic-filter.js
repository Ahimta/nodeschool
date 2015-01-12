module.exports = function (ms) {
  return ms
    .filter(function (m) { return m.message.length < 50 })
    .map(function (m) { return m.message })
}
