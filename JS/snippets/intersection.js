// Returns a list of elements that exist in both arrays.

// Create a Set from array b, then use filter() on array a to only keep values contrained in array b.

const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

// Exp.
  intersection([1, 2, 3], [4, 3, 2]);
  // [2, 3]
