// Takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function.

// Using closures and the spread operator to map the array of args to the inputs of the function.

const spreadOver = fn => argsArr => fn(...argsArr);

// Exp.
  const arrayMax = spreadOver(Math.max);
  arrayMax([1, 2, 3]);
  // 3
