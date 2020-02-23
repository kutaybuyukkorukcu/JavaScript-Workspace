// Returns the symmetric difference between two arrays, using a provided function as a comparator.

// filter() and findIndex() to find the appropriate values.

const symmetricDifferenceWith = (arr, val, comp) => [
  ...arr.filter(a => val.findIndex(b => comp(a, b)) === -1),
  ...val.filter(a => arr.findIndex(b => comp(a, b)) === -1)
];

// Exp.
  symmetricDifferenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9],
    (a, b) => Math.round(a) === Math.round(b)
  ); 
  // [1, 1.2, 3.9]
