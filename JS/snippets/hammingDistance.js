// Calculates the Hamming distance between two values.

// Using XOR operator to find the bit difference between the two numbers, convert to a binary string using toString(2).

const hammingDistance = (num1, num2) => ((num1 ^ num2).toString(2).match(/1/g) || '').length;

// Exp.
  hammingDistance(2, 3);
  // 1
