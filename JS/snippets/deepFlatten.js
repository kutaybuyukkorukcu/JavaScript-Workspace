// Deep flattens an array.

// Array.prototype.concat() with an empty array and the spread operator to flatten an array.
// Recursively flatten each element that is an array.

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

Exp.
  countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
