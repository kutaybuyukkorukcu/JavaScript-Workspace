// Creates an array of arrays, ungrouping the elements in an array produced by zip.

// apply() to get the longest subarray in the array, map() to make each element an array. reduce() and forEach() to map grouped values to individual arrays.

const unzip = arr =>
  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: Math.max(...arr.map(x => x.length))
    }).map(x => [])
  );

// Exp.
  unzip([['a', 1, true], ['b', 2, false]]);
  // [['a', 'b'], [1, 2], [true, false]]
 
// 🧙‍♂️👍 