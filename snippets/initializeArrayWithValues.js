// Initializes and fills an array with the specified values.

// Array(n) to create an array of the desired length, fill(v) to fill it with the desired values. Omit val to use a def value of 0.

const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);

// Exp.
  initializeArrayWithValues(5, 2);
  // [2, 2, 2, 2, 2]
