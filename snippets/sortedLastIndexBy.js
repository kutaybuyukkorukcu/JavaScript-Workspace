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
