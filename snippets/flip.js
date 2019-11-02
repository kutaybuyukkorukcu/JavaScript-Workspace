// Flip takes a function as an argument, then makes the first argument the last.

const flip = f => (first, ...rest) => f(...rest, first);
