module.exports = function (arr, fn, initValue) {

  const helper = function (acc, index) {
    if (index === arr.length) { return acc }
    else {
      const nextAcc   = fn(acc, arr[index], index, arr),
            nextIndex = (index + 1)

      return helper(nextAcc, nextIndex)
    }
  }

  return helper(initValue, 0)
}
