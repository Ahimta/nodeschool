module.exports = function (fn, argsLength) {

  if (typeof argsLength !== 'number') { argsLength = fn.length }

  function helper(prevArgs) {
    return function (currentArg) {
      const currentArgs = prevArgs.concat(currentArg)

      if (currentArgs.length < argsLength) { return helper(currentArgs) }
      else { return fn.apply(fn, currentArgs) }
    }
  }

  return helper([])
}
