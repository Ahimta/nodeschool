module.exports = function (fn, argsLength) {

  const arity
  if (argsLength) { arity = argsLength }
  else            { arity = fn.length }

  const args = Array.prototype.slice.call(arguments, 0, (arity + 1))
  const curried = args.reduce(
    function (acc, __) {
      return function(arg) {}
    }
  )
}
