module.exports = function (words) {
  return words.reduce(
    function (wordsCounts, currentWord) {
      const currentWordCount = (wordsCounts[currentWord] || 0)
      wordsCounts[currentWord] = (currentWordCount + 1)
      return wordsCounts
    },
    {}
  )
}
