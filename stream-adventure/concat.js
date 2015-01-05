const concatStream = require('concat-stream')

process.stdin.pipe(concatStream({encoding: 'string'}, function (input) {
  const reversedInput = input.split('').reverse().join('')
  console.log(reversedInput)
}))
