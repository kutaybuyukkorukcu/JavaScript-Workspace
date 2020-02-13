// Returns the sum of the powers of all the numbers from start to end.

// Using fill() to create an array of all the numbers in the target range, map() and the exponent operator(**) to raise them to power and reduce() to add them together.

const sumPower = (end, power = 2, start = 1) =>
  Array(end + 1 - start)
    .fill(0)
    .map((x, i) => (i + start) ** power)
    .reduce((a, b) => a + b, 0);
    
// Exp.
  sumPower(10, 3);
  // 3025
