// unzip

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

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// unzipWith

// Creates an array of elements, ungrouping the elements in an array produced by zip and applying the provided function.

// max.apply() to get the longest subarray in the array, map() to make each element an array. reduce() and forEach() to map grouped values to individual arrays. Use map() and the spread operator to apply fn to each individual group of elements.

const unzipWith = (arr, fn) => 
  arr.reduce((acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length : Math.max(...arr.map(x => x.length))
    }).map(x => [])
  ).map(val => fn(...val));
  
// Exp.
  unzipWith([[1, 10, 100], [2, 20, 200]], (...args) => args.reduce((acc, v) => acc + v, 0));
  // [3, 30, 300]
