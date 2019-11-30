// Returns the index of the last element for which the provided function returns a truthy value.

// map() to map each element to an array with its index and value. Use filter() to remove elements for which fn return falsy values, pop() to get the last one.
// -1 is the default value when not found.

const findLastIndex = (arr, fn) => 
  (arr
    .map((val, i) => [i, val])
    .filter(([i, val]) => fn(val, i, arr))
    .pop() || [-1])[0];
    
 // Exp.
  findLastIndex([1, 2, 3, 4], n => n % 2 === 1);
  // 2 (index of the value 3)
  
  findLastIndex([1, 2, 3, 4], n => n === 5);
  // -1 (default value when not found)
