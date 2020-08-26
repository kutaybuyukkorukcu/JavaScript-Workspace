// Returns the difference between two arrays, after applying the provided function to each array element of both.

// Create set by applying fn to each element in b, then map to apply fn to each element in a, then filter.

const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.map(fn).filter(el => !s.has(el));
};

// Exp.
  differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); 
  // [2]

// 🧙‍♂️👍