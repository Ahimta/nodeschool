function repeat(operation, num) {
  if (num <= 0) { return }
  else {
    operation()
    return function () {
      return repeat(operation, (num - 1))
    }
  }
}

function trampoline(fn) {
  var result = fn

  while (fn && typeof result === 'function') {
    result = result()
  }

  return result
}

module.exports = function (operation, num) {
  const repeation   = repeat(operation, num),
        trampolined = trampoline(repeation)
  return trampolined
}
