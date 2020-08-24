// Chunks an array into smaller arrays of a specified size.

/*
Array.from -> Array.from({length: 5}, (v, i) => i);
              // [0, 1, 2, 3, 4]
*/

const chunk = (arr, size) =>
          Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
                  arr.slice(i * size, i * size + size)
          );
          
// Exp.
  chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]

// 🧙‍♂️👍