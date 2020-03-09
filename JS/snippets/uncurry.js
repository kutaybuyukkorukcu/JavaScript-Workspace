// Uncurries a function up to depth n.

// Return a variadic function. Using reduce() on the provided args to call each subsequent curry level of the function. If the length of the provided args is less than 'n' throw an error.

// Otherwise, call 'fn' with the proper amount of args, using slice(0, n). 

const uncurry = (fn, n = 1) => (...args) => {
  const next = acc => args => args.reduce((x, y) => x(y), acc);
  if (n > args.length) throw new RangeError('Arguments too few!');
  return next(fn)(args.slice(0, n));
};
  
// Exp.
  const add = x => y => z => x + y + z;
  const uncurriedAdd = uncurry(add, 3);
  
  uncurriedAdd(1, 2, 3); 
  // 6
