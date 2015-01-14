module.exports = function (namespace) {

  const logger = function () {
    const loggerArgs = Array.prototype.slice.call(arguments)
    const allArgs    = [namespace].concat(loggerArgs)
    console.log.apply(null, allArgs)
  }

  return logger
}
