// Checks if the provided integer is a prime number.

// Check numbers from 2 to the square root of the given number. Returns false if any of them divides the given number, else returns true.

const isPrime = num => {

  const boundary = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= boundary; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num >= 2;
};

// Exp.
  isPrime(11);
  // true
