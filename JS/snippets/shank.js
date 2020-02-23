// Has the same functionality as splice(), but returning a new array instead of mutating the original array.

// Use slice() and concat() to get a new array with the new contents after removing existing elements or adding new elements. 

const shank = (arr, index = 0, delCount = 0, ...elements) =>
  arr
    .slice(0, index)
    .concat(elements)
    .concat(arr.slice(index + delCount));
    
// Exp.
  const names = ['alpha', 'bravo', 'charlie'];
  const namesAndDelta = shank(names, 1, 0, 'delta');
  // [ 'alpha', 'delta', 'bravo', 'charlie' ]
