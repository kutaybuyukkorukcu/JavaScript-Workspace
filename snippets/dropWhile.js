// Removes elements in an array until the passed function returns true. Returns the remaining elements in the array.

// Loop through the array using slice() to drop the first element of the array until the returned value is true.

const dropWhile = (arr, func) => {
  while(arr.length > 0 && !func(arr[0])){
    arr = arr.slice(1);
  }
  return arr;
};

// Exp.
  dropWhile([1, 2, 3, 4], n => n >= 3); 
  // [3,4]
