// Performs left-to-right function composition.

// Using reduce() to perform left-to-right func comp. First func can accept 1 or more args; the remaining funcs must be unary.

const composeRight = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));

// Exp.
  const add = (x, y) => x + y;
  const square = x => x * x;
  
  const addAndSquare = composeRight(add, square);
  
  addAndSquare(1, 2); 
  // 9

// 🧙‍♂️👍