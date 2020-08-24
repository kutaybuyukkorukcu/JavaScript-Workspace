// Creates a function that accepts up to one argument, ignoring any additional arguments.

const unary = fn => val => fn(val);

// Exp.
  ['6', '8', '10'].map(unary(parseInt));

// 🧙‍♂️👍