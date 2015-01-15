module.exports = function (target, method) {
  const originalFunction = target[method]
  const result           = {count: 0}

  target[method] = function () {
    result.count++
    const args = Array.prototype.slice.call(arguments)
    return originalFunction.apply(target, args)
  }

  return result
}
