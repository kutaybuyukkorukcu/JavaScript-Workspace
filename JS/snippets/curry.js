// Curries a func.

// If the number of provided args is sufficient, call the passed func 'fn'. Otherwise, return a curried func 'fn' that expects the rest of the args.

const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
  
// Exp.
  curry(Math.min, 3)(10)(50)(2);
  // 2
