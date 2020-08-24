// Removes elements in an array until the passed function returns True. Returns the removed elements.

// Loop through the array, for...of loop over entries() until the returned value from the function is true. Return the removed elements, using slice().

const takeWhile = (arr, func) => {
  for (const [i, val] of arr.entries()) {
    if (func(val)) {
      return arr.slice(0, i);
    }
  }
  return arr;
};

// Exp.
  takeWhile([1, 2, 3, 4], n => n >= 3);
  // [1, 2]

// 🧙‍♂️👍