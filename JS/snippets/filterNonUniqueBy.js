// Filters out the non-unique values in an array, based on a provided comparator function.

// filter() and every() for an array containing only the unique values, based on the comparator function, fn.

const filterNonUniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
  
// Exp.
  filterNonUniqueBy(
    [
      { id: 0, value: 'a' },
      { id: 1, value: 'b' },
      { id: 2, value: 'c' },
      { id: 1, value: 'd' },
      { id: 0, value: 'e' }
    ],
    (a, b) => a.id == b.id
  ); 
  // [ { id: 2, value: 'c' } ]

// 🧙‍♂️👍