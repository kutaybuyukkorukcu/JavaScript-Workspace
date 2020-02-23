// sortedIndexBy

// Returns the lowest index at which value should be inserted into array in order to maintain it's sort order, based on a provided iterator.

// We are checking if the array is sorted in desc order. Using findIndex() to find the appropriate index where the element that should be inserted, based on the iterator function 'fn'.

const sortedIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr.findIndex(el => (isDescending ? val >= fn(el) : val <= fn(el)));
  return index === -1 ? arr.length : index;
};

// Exp.
  sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x);
  // 0

// --------------------------------------------------------------------------------------------------------------------------------------------------------

// sortedLastIndexBy

// Returns the highest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.

const sortedLastIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr
    .map(fn)
    .reverse()
    .findIndex(el => (isDescending ? val <= el : val >= el));
  return index === -1 ? 0 : arr.length - index;
};

// Exp.
  sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x);
  // 1
