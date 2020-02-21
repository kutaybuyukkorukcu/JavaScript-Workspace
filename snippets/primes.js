// Generates primes up to a given number, using the Sieve of Eratosthenes.

// Generate an array from 2 to the given number. Using filter() to filter out the values divisible by any number from 2 to the square root of the provided number.

const primes = num => {
  let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2),
    sqroot = Math.floor(Math.sqrt(num)),
    numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);
  numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));
  return arr;
};

// Exp.
  primes(15);
  // [2,3,5,7,11,13]