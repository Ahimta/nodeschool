const childProcess = require('child_process'),
      duplexer     = require('duplexer')

module.exports = function (cmd, args) {

  const externalProcess = childProcess.spawn(cmd, args)
  return duplexer(externalProcess.stdin, externalProcess.stdout)
}
