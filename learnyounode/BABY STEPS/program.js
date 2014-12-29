var sum = process.argv.slice(2).reduce(function (acc, x) {
  return acc + parseInt(x);
}, 0);

console.log(sum);
