// Accepts a converging function and list of branching functions and returns a function that applies each branching function to the arguments and the results of the branching functions are passed as arguments to the converging function.

// map() and apply() to apply each function to the given arguments. Use the spread operator to call coverger with the results of all other functions.

const converge = (converger, funcs) => (...args) =>
                converger(...funcs.map(fn => fn.apply(null, args)));
                
// Exp.
  const average = converge((a, b) => a / b, [
    arr => arr.reduce((a, v) => a + v, 0),
    arr = > arr.length
  ]);
  // arr => arr.reduce((a, v) => a + v, 0) -> a 
  // arr => arr.length -> b
  average([1, 2, 3, 4, 5, 6, 7]); 
  // 4
