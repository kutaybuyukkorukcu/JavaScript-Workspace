// Performs right-to-left function composition.

// Using reduce() to perform right-to-left function composition. Latter function can accept one or more arguments.

const compose = (...funcs) => funcs.reduce((f, g) => (...args) => f(g(...args)));

// Exp.
  const add5 = x => x + 5;
  const multiply = (x, y) => x * y;
  const multiplyAndAdd5 = compose(
    add5,
    multiply
  );
  
  multiplyAndAdd5(5, 2);
  // 15
