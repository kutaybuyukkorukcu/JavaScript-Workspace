// intersectionBy

// Returns a list of elements that exist in both arrays, after applying the provided function to each array element of both.

// Create a Set by applying fn to all elements in b, then use filter() on a to only keep elements, which produce values contained in b when fn is applied to them.

const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

// Exp.
  intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
  // [2.1]
  
-----------------------------------------------------

// intersectionWith

// Returns a list of elements that exist in both arrays, using a provided comparator function.

// filter() and findIndex() in combination with the provided comparator to determine intersecting values.

const intersectionWith = (a, b, comp) => {
  a.filter(x => b.findIndex(y => comp(x, y)) !== -1);
};

// Exp.
  intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], 
              (a, b) => Math.round(a) === Math.round(b)); 
  // [1.5, 3, 0]
