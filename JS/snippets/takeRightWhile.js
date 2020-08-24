// Removes elements from the end of an array until the passed function returns true. Returns the removed elements.

// Loop through the array, using reduceRight() and accumulating elements while the function returns falsy value.

const takeRightWhile = (arr, func) =>
  arr.reduceRight((acc, el) => (func(el) ? acc : [el, ...acc]),
[]);

// Exp.
  takeRightWhile([1, 2, 3, 4], n => n < 3);
  // [3, 4]

// 🧙‍♂️👍