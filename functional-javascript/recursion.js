
function flatten(xs) {
  const flattenedXs = []

  function helper(xs) {
    xs.forEach(function (xOrXs) {
      if (Array.isArray(xOrXs)) { helper(xOrXs) }
      else { flattenedXs.push(xOrXs) }
    })
  }
  helper(xs)
  return flattenedXs
}

function uniq(xs) {
  const uniqXs     = []
  var currentValue = null

  xs.forEach(function (x) {
    if (x !== currentValue) {
      currentValue = x
      uniqXs.push(x)
    }
  })

  return uniqXs
}

module.exports = function getDependencies (p) {

  const dependencies = p.dependencies

  if (!dependencies) { return [] }
  else {
    const childrenDependencies = Object.keys(dependencies).map(function (dependencyName) {
      const dependency       = dependencies[dependencyName]
      const dependencyString = (dependencyName + '@' + dependency.version)

      return getDependencies(dependency).concat(dependencyString)
    })

    return uniq(flatten(childrenDependencies).sort())
  }
}
