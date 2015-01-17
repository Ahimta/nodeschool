module.exports = function (userIds, load, done) {

  var   remainingUsers = userIds.length
  const loadedUsers    = []

  userIds.forEach(function (userId, index) {
    load(userId, function (user) {
      loadedUsers[index] = user
      remainingUsers--
      if (remainingUsers === 0) { done(loadedUsers) }
    })
  })

  return loadedUsers
}
