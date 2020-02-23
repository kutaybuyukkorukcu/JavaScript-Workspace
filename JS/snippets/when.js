// Tests a value, x, against a predicate function. True -> return fn(x), false -> return x.

// Return a function expecting a single value, x, that returns the appropriate value based on pred.

const when = (pred, whenTrue) => x => (pred(x) ? whenTrue(x) : x);

// Exp.
  const doubleEvenNumbers = when(x => x % 2 === 0, x => x * 2);
  doubleEvenNumbers(2);
  // 4
