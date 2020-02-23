// Returns all indices of val in an array. If val never occurs, returns [].

// reduce() to loop over elements and store indeces for matching elements. Return the array of indices.

const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

// Exp.
  indexOfAll([1, 2, 3, 1, 2, 3], 1);
  // [0,3]
