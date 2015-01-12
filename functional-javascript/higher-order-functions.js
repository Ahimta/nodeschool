module.exports = function repeat(f, n) {
  if (n <= 0) { return }
  else {
    f()
    repeat(f, n - 1)
  }
}
