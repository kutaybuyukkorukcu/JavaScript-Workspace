// Returns the sum of an array, after mapping each element to a value using the provided function.

// Using map() to map each element to the value returned by func, reduce() to add each value to an accumulator, initialized with a value of 0.

const sumBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn])
     .reduce((acc, val) => acc + val, 0);
  
// Exp.
  sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n');
  // 20
