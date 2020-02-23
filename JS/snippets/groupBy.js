// Groups the elements of an array based on the given function.

// map() to map the values of an array to a func or prop name. reduce() to create an object, where the keys are produced from the mapped results.

const groupBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);
    return acc;
  }, {});
  
// Exp.
  groupBy([6.1, 4.2, 6.3], Math.floor);
  // {4: [4.2], 6: [6.1, 6.3]}
