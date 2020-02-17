// Returns an array of n random integers in the specified range.

// Using from() to create an empty array of the specific length, Math.random() to generate a random number and map it to the desired range, using Math.floor() to make it an int.

const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  
// Exp. 
  randomIntArrayInRange(12, 35, 10);
  // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
