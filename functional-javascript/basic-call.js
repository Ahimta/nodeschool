module.exports = function () {
  const allArguments   = arguments
  const quackArguments = Array.prototype.filter.call(allArguments, function (arg) {
    return Object.prototype.hasOwnProperty.call(arg, 'quack')
  })
  return quackArguments.length
}
