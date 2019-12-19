// takeWhile

// Removes elements in an array until the passed function returns True. Returns the removed elements.

// Loop through the array, for...of loop over entries() until the returned value from the function is true. Return the removed elements, using slice().

const takeWhile = (arr, func) => {
  for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);
  return arr;
};

// Exp.
  takeWhile([1, 2, 3, 4], n => n >= 3);
  // [1, 2]

------------------------------------------------------------------------------------------------------------------------------------------------------------

// takeRightWhile

// Removes elements from the end of an array until the passed function returns true. Returns the removed elements.

// Loop through the array, using reduceRight() and accumulating elements while the function returns falsy value.

const takeRightWhile = (arr, func) =>
  arr.reduceRight((acc, el) => (func(el) ? acc : [el, ...acc]),
[]);

// Exp.
  takeRightWhile([1, 2, 3, 4], n => n < 3);
  // [3, 4]
