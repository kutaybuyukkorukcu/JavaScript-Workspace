// Flattens an array up to the specified depth.

// Decrementing depth by 1 for each level of depth. Using reduce() and concat() to merge elements or arrays. Base case, for depth equal to 1 stops recursion.
// Omit the second argument, depth to flatten only to a depth of 1.

const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);
  
// Exp.
  flatten([1, [2], 3, 4]);
  // [1, 2, 3, 4]
  flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); 
  // [1, 2, 3, [4, 5], 6, 7, 8]

// 🧙‍♂️👍