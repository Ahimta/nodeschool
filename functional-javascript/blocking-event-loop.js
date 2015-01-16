module.exports = function (operation, num) {
  if (num <= 0) { return }
  else { return setImmediate(operation) }
}
