// Removes elements from the end of an array until the passed function returns true. Returns the remaining elements in the array.

// Loop through the array using slice to drop the last element of the array until returned value is true.

const dropRightWhile = (arr, func) => {
  let rightIndex = arr.length;
  while(rightIndex-- && !func(arr[rightIndex])); // rightIndex-- does the work.
  return arr.slice(0, rightIndex + 1);
};

// Exp.
  dropRightWhile([1, 2, 3, 4], n => n < 3);
  // [1, 2]
