// Returns an array of n-tuples of consecutive elements.

// Using slice() and map() to create an array of appropriate length and populate it with n-tuples of consecutive elements from arr.
// If n is greater than the length of arr, return an empty arr.

const aperture = (n, arr) =>
  n > arr.length
    ? []
    : arr.slice(n - 1).map((v, i) => [...arr.slice(i, i + n - 1), v]);
    
// Exp.
  R.aperture(2, [1, 2, 3, 4]);
  // [[1, 2], [2, 3], [3, 4]]
