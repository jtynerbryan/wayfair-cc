const array = [['quick', 'lazy'], ['brown', 'black', 'grey'], ['fox', 'dog']]

const allCombinations = (array) => {
  return array.reduce((a, b) => {
    let result = []
    a.forEach(x => {
      b.forEach(y => {
        result.push([].concat(x, y))
      })
    })
    return result
  })
}

const result = allCombinations(array)

console.log(result)
