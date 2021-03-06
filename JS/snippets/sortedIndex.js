// Returns the lowest index at which value should be inserted into array in order to maintain its sort order.

// Check if the array is sorted in descending order. findIndex() to find the appropriate index where the element should be inserted.

const sortedIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));
  return index === -1 ? arr.length : index;
};

// Exp.
  sortedIndex([5, 3, 2, 1], 4);
  // 1
