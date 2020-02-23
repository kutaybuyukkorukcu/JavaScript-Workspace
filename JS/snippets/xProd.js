// Creates a new array out of the two supplied by creating each possible pair from the arrays.

// reduce(), map() and concat() to produce every possible pair from the elements of the two arrays and save them in an array.

const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);

// Exp.
  xProd([1, 2], ['a', 'b']); 
  // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
