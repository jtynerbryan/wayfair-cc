const array = [['quick', 'lazy'], ['brown', 'black', 'grey'], ['fox', 'dog']];

const allCombinations = array => {
  // iterate over array of arrays
  return array.reduce((a, b) => {
    // create empty array that will become the accumulator (the value of a for each iteration)
    let result = [];
    // iterate over the value of a (first time around it will be ['quick', 'lazy'])
    a.forEach(x => {
      // iterate over b (first time around will be ['brown', 'black', 'grey'])
      b.forEach(y => {
        // push a new array into result, combining each element in a with all elements in b
        // first array pushed to result will be ['quick', 'brown'], next will be ['quick', 'black'], then ['quick', 'grey'] etc.
        result.push([].concat(x, y));
      });
    });
    // result is now a 2 dimensional array with all combos of a and b
    // return result so it becomes the new value of a for the next iteration
    return result;
    // for the second iteration the value of b will now be ['fox', 'dog']
    // repeat the same process pushing new combos to re-initialized result array
    // ex. result.push([].concat(['quick', 'brown'], 'fox')), then result.push([].concat(['quick', 'brown'], 'dog')) etc.
  });
};

// allCombinations(array);

const allCombinationsOneLine = array => array.reduce((a, b) => [].concat(...a.map(x => b.map(y => [].concat(x, y)))));
// This new version has the same time complexity, but uses .map instead of .forEach.
// This is a more functional approach because .map, unlike .forEach, doesn't rely on side effects to function properly
console.log(allCombinationsOneLine(array));

// time complexity = O(n^3)
// We have .reduce which is O(n)
// two nested .map loops which are each O(n)
