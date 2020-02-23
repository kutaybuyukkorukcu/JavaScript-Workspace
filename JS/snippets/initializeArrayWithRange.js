// Initializes an array containing the numbers in the specified range where start and end are inclusive with their common difference step.

// from() to create an array of the desired length, (end - start + 1) / step, and map() to fill it with the desired values in the given range.
// Omit start to use a def value of 0.

const initializeArrayWithRange = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end - start + 1) / step) }, (v, i) => i * step + start);
  
// Exp.
  initializeArrayWithRange(7, 3);
  // [3,4,5,6,7]
