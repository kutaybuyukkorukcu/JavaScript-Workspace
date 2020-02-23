// Returns the unique symmetric difference between two arrays, not containing duplicate values from either array.

// filter() and includes() on each array to remove valeus contained in the other, then create a Set from the, removing duplicate values.

const uniqueSymmetricDifference = (a, b) => [
  ...new Set([...a.filter(v => !b.includes(v)), ...b.filter(v => !a.includes(v))])
];

// Exp.
  uniqueSymmetricDifference([1, 2, 3], [1, 2, 4]);
  // [3, 4]
