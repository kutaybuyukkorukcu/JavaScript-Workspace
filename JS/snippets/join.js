// Join all elements of an array into a string and returns this string. Uses a seperator and an end separator.

// reduce() to combine elements into a string. Omit the second argument, seperator, to use a default seperator of ','.
// Omit the third argument, end, to use the same value as seperator by default.

const join = (arr, separator = ',', end = separator) => 
  arr.reduce(
    (acc, val, i) =>
      i === arr.length - 2
        ? acc + val + end
        : i === arr.length - 1
        ? acc + val
        : acc + val + separator,
  ''
);

// Exp.
  join(['pen', 'pineapple', 'apple', 'pen'], ',', '&');
  // "pen,pineapple,apple&pen"
