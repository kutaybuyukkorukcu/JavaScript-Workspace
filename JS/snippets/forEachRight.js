// Executes a provided function once for each array element, starting from the array's last element.

// slice(0) to clone the given array, reverse() to reverse it and forEach() to iterate over the reversed array.

const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
    
// Exp.
  forEachRight([1, 2, 3, 4], val => console.log(val));
  // '4', '3', '2', '1'

// 🧙‍♂️👍