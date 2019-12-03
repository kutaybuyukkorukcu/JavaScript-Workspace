// Create a n-dimensional array with given value. With the help of recursion.

// map() to generate rows where each is a new array initialized using the func.

const initializeNDArray = (val, ...args) => 
  args.length === 0
    ? val
    : Array.from({ length : args[0] }).map(() =>
  initializeNDArray(val, ...args.slice(1)));
  
// Exp.
  initializeNDArray(5, 2, 2, 2);
  // [[[5,5],[5,5]],[[5,5],[5,5]]]
