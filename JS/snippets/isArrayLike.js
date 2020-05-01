// Checks if the provided argument is array-like.

// Check if the provided argument is not 'null' and that its Symbol.iterator (default iterator for an object) property is a func.

const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

// Exp.
  isArrayLike([1, 2, 3]); // true
  isArrayLike(document.querySelectorAll('.className')); // true
  isArrayLike(null); // false
