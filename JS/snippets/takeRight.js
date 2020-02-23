// Returns an array with n elements removed from the end.

// slice() to create a slice of the array with n elements taken from the end.

const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

// Exp.
  takeRight([1, 2, 3], 2);
  // [ 2, 3 ]
