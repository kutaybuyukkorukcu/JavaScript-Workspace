// Creates an array of elements, grouped based on the position in the original arrays.

// Math.max.apply() to get the longest array in the arguments. 
// Creates an array with that length as return value and use Array.from() with a map-function to create an array of grouped elements. 
// If lengths of the argument-arrays vary, undefined is used where no value could be found.

const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(x => x.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
  });
};

// Exp.
  zip(['a', 'b'], [1, 2], [true, false]);
  // [['a', 1, true], ['b', 2, false]]
