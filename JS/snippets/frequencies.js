Returns an object with the unique values of an array as keys and their frequencies as the values.

Using reduce() to map unique values to an object's keys, adding to existing keys every time the same value is encountered.

const frequencies = arr =>
  arr.reduce((a, v) => {
    a[v] = a[v] ? a[v] + 1 : 1;
    return a;
  }, {});
  
  // Exp.
  
  frequencies(['a', 'b', 'a', 'c', 'a', 'a', 'b']);
  // { a : 4, b : 2, c : 1 }
