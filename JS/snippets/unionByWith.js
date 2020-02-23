//unionBy

// Returns every element that exists in any of the two arrays once, after applying the provided function to each array element of both.

const unionBy = (a, b, fn) => {
  const s = new Set(a.map(fn));
  return Array.from(new Set([...a, ...b.filter(x => 
                    !s.has(fn(x)))]));
};

// Exp.
  unionBy([2.1], [1.2, 2.3], Math.floor);
  // [2.1, 1.2]

---------------------------------------------------------------------------------------------------------------------------
//unionWith
  
// Returns every element that exists in any of the two arrays once, using a provided comparator function.
  
// Create a Set with all values of a and values in b for which the comparator finds no matches in a, using findIndex().
  
const unionWith = (a, b, comp) =>
  Array.from(new Set([...a, ...b.filter(
    x => a.findIndex(y => comp(x, y)) === -1)]));

// Exp.
  unionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], 
            (a, b) => Math.round(a) === Math.round(b));
  // [1, 1.2, 1.5, 3, 0, 3.9]
